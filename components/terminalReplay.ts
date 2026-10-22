/**
 * Replays the terminal type-and-reveal transition for a section reached from
 * the menu. The section is held at its "before typing" frame while the page
 * scrolls, then plays as soon as scrolling settles, so the command types out
 * where the reader can see it.
 */

const SETTLED_FRAMES = 3;
const MAX_WAIT_FRAMES = 90;

let finishPending: (() => void) | null = null;
let pendingTarget: string | null = null;

/** Remembers an in-page target across a client-side page navigation. */
export function setPendingTarget(hash: string | null) {
  pendingTarget = hash;
}

export function consumePendingTarget(): string | null {
  const hash = pendingTarget;
  pendingTarget = null;
  return hash;
}

function terminalAnimations(root: Element): Animation[] {
  return root
    .getAnimations({ subtree: true })
    .filter(
      (animation) =>
        animation instanceof CSSAnimation && animation.animationName.startsWith("terminal")
    );
}

export function replayTerminal(root: Element | null) {
  // A newer replay supersedes one still waiting for its scroll to settle.
  finishPending?.();
  if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const animations = terminalAnimations(root);
  if (animations.length === 0) return;

  for (const animation of animations) {
    animation.pause();
    animation.currentTime = 0;
  }

  let done = false;
  const start = () => {
    if (done) return;
    done = true;
    if (finishPending === start) finishPending = null;
    for (const animation of animations) animation.play();
  };
  finishPending = start;

  let lastY = window.scrollY;
  let stillFrames = 0;
  let frames = 0;
  const waitForScroll = () => {
    if (done) return;
    frames += 1;
    const y = window.scrollY;
    stillFrames = Math.abs(y - lastY) < 0.5 ? stillFrames + 1 : 0;
    lastY = y;
    if (stillFrames >= SETTLED_FRAMES || frames >= MAX_WAIT_FRAMES) start();
    else requestAnimationFrame(waitForScroll);
  };
  requestAnimationFrame(waitForScroll);
}

/** Scrolls to an in-page target and replays the terminal section that owns it. */
export function revealTerminalTarget(hash: string | null) {
  if (!hash) {
    replayTerminal(document.querySelector(".terminal-body"));
    window.scrollTo({ top: 0 });
    return;
  }

  const target = document.getElementById(hash);
  if (!target) return;
  replayTerminal(target.closest(".terminal-section") ?? target);
  target.scrollIntoView({ block: "start" });
}
