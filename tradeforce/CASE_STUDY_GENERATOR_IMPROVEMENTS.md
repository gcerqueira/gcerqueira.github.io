# Case Study Generator: Three-Layer Structure Redesign

## What Changed

The case-study-generator skill has been restructured from a process-focused workflow to a **three-layer information architecture** that prioritizes immediate clarity while rewarding deeper reading.

---

## The Core Problem

Case studies had good content but required readers to extract value themselves:
- Key decisions were buried in process sections
- Ownership and impact weren't surfaced early
- Readers had to work to understand what was actually decided

Result: "There's good thinking here, but I have to dig for it."

---

## The Solution: Three-Layer Structure

All case studies now follow this pattern:

### Layer 1: Top Layer (10-Second Scan)
The TL;DR section provides immediate clarity:
- **Problem**: What was broken or missing (specific)
- **Role**: What you led (clear ownership)
- **Outcome**: What happened (measurable impact)

Example of strong TL;DR:
"Led redesign of checkout flow used by 2M+ users. Found 40% abandoned at payment step due to unclear trust signals. Chose to move trust signals earlier and add payment preview. Reduced abandonment by 12%, resulting in +$2.3M annual revenue."

This tells a recruiter in 10 seconds if they want to keep reading.

### Layer 2: Middle Layer (Decision Thinking)
New "Key Decision" or "The Decision" sections for all detail levels:
- What alternatives you considered
- Why you chose A over B
- What constraint forced the choice
- What you gave up

This separates strong case studies from weak ones. It shows judgment.

### Layer 3: Deep Layer (Full Process)
Process, discovery, exploration sections for readers who want depth:
- Full discovery methods
- Iteration and refinement
- Technical details
- Team collaboration

Only read if interested in depth.

---

## What Changed in Each Detail Level

### BRIEF (~600-800 words)
**Before**: Context > Approach > Outcome
**After**: Context > The Decision > Outcome

The decision section now explicitly covers the trade-off.

### STANDARD (~1000-1200 words)
**Before**: Context > Problem > Process > Design Decisions > Outcome
**After**: Context > The Problem > Key Decision > Design Process > Outcome

Separated decision-making from process so thinking is visible immediately.

### DETAILED (~2000-2500 words)
**Before**: Context > Problem > Discovery > Direction > Design Decisions > Challenges > Outcome
**After**: Context > The Problem > Discovery > The Decision > Design Decisions > Challenges > Outcome

"The Decision" section made explicit and sequential. Layering is clearer.

---

## Changes to Workflow

### STEP 3 — TL;DR Block (Renamed and Enhanced)
Now called "The Top Layer" with explicit emphasis on high-signal writing.

**New guidance:**
- Ownership must be clear (use verb: "led", "owned", "designed")
- Decision must be visible (what you chose and what you didn't)
- Impact must be immediate (metric or outcome in one sentence)
- Constraints make the decision look smarter (timeline, budget, org, tech)

New pattern to follow:
"Led [what] for [scope]. Found [specific problem]. Chose [decision] over [what you didn't do] due to [constraint]. Result: [metric]."

### STEP 4 — Deep Dive (Updated Guidance)
When asking questions, listen actively for:
- Trade-off signals: "we could have done X but chose Y because..."
- Constraints: timeline, tech, org, budget
- What was rejected and why

Prompt the user to surface these if they're missing.

### STEP 7 — Generate (Verification)
Added a three-layer verification check:
- Top layer: Is ownership clear? Is decision visible? Is impact immediate?
- Middle layer: Can you see why they chose A over B?
- Deep layer: Is the full exploration here?

---

## Why This Works

Recruiters and hiring managers skim. They read:
1. The headline/TL;DR (10 seconds)
2. If interested, the decision section (30 seconds)
3. Only if deeply interested, the full process

This structure respects their time while giving credit for thoughtful work.

The middle layer (decisions, trade-offs) is where senior judgment becomes visible. That's what separates candidates.

---

## Reference Files Updated

1. **SKILL.md**
   - Renamed STEP 3 to "TL;DR Block (The Top Layer)"
   - Enhanced with three-layer examples
   - Updated STEP 4 guidance on surfacing trade-offs
   - Updated STEP 7 with verification checks

2. **voice-guidelines.md**
   - Added "THE THREE-LAYER STRUCTURE" section at the top (after writing principles)
   - Explains what each layer does and why
   - Includes concrete examples of strong vs weak TL;DRs
   - Updated all section structures (BRIEF, STANDARD, DETAILED) to align with three-layer thinking
   - "Design Decisions" renamed to "Key Decision" in BRIEF
   - "Process" renamed to "Design Process" in STANDARD to clarify it's the deep layer
   - "Direction" renamed to "The Decision" in DETAILED to make decision-making explicit

3. **html-template.md**
   - No changes needed; section names in template will be auto-generated from voice-guidelines

---

## Key Phrases to Communicate

When using this skill:
- "The TL;DR is your top layer — recruiters read this in 10 seconds"
- "The middle layer shows your thinking — why you chose A over B"
- "The deep layer is for readers who want the full picture"

When iterating:
- "Is the decision visible in the first section?"
- "What trade-off did you make? What did you give up?"
- "Why this path over the alternative?"

---

## Examples of Before/After

### BEFORE (Weak TL;DR)
"We redesigned the experience to improve usability and streamline workflows. Conducted user research and made improvements. The results were positive."

Problems: No ownership, no specific problem, no visible decision, no impact metric.

### AFTER (Strong TL;DR)
"Led complete redesign of identity verification flow at Clipboard Health. Users were abandoning at high rates because the flow showed rejection reasons before submission. Chose to show reasons after submission with support paths rather than restructuring (8-week timeline constraint). Reduced abandonment by 34%, improved completion rate from 68% to 91%."

Improvements:
- Ownership: "Led"
- Scope: "Clipboard Health", "identity verification flow"
- Specific problem: "abandoning because flow showed reasons before submission"
- Decision: "show reasons after with support paths" vs "restructure"
- Constraint: "8-week timeline"
- Impact: Two metrics showing real value

Reader knows exactly what you did and can decide if they want to read more.
