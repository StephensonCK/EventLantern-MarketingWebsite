export interface Resource {
  slug: string;
  title: string;
  category: string;
  description: string;
  intro: string;
  includes: string[];
  setup: string;
  sections: { id: string; title: string; body: string; steps: string[] }[];
  columns: string[];
  rows: string[][];
  previewColumns: number[];
  solutionSlugs: string[];
  solutionLabel: string;
}

export const resources: Resource[] = [
  {
    slug: 'conference-run-of-show-template',
    title: 'Conference run-of-show template',
    category: 'Program & production',
    description: 'A free, editable conference run-of-show template with example timings, owners, production cues, and fallback plans. Download the CSV and adapt it to your event.',
    intro: 'Give the people running the room one shared sequence: what happens, who owns it, and what needs to be ready before the next cue.',
    includes: ['12 example production cues', 'Owners, dependencies, and fallbacks', 'Planned and actual timing fields'],
    setup: 'The example is a fictional half-day conference in one room. Replace every time and role with your event details. Add your event date and venue time zone to the file name or a notes sheet before sharing it. All durations are in minutes.',
    sections: [
      {
        id: 'build-the-sequence', title: 'Start with the room, then add the program',
        body: 'The public agenda tells attendees where to be. A run of show tells the crew how to make each moment happen. Include setup, doors, introductions, breaks, and transitions as separate rows.',
        steps: ['Put fixed commitments in first: venue access, opening remarks, catering service, and the venue handback time.', 'Work backward from the first session to allow for equipment checks, speaker arrival, and opening the doors.', 'Add a row whenever the owner changes. A speaker introduction and a presentation may need different people and cues.'],
      },
      {
        id: 'assign-owners', title: 'Give each cue one accountable owner',
        body: 'A role such as “AV lead” is a useful placeholder while planning. Before the crew briefing, replace it with the name of the person who will act on the cue.',
        steps: ['Identify the show caller: the person who decides when the next cue starts.', 'Confirm how owners receive cues, such as a radio channel or backstage hand signal. Keep a separate crew contact sheet.', 'Write observable prerequisites. “Slides loaded and microphone checked” is more useful than “AV ready.”'],
      },
      {
        id: 'plan-for-delays', title: 'Decide what moves when the program slips',
        body: 'A fallback is a decision the team can use under pressure. Agree on the options in advance, then let the show caller choose which one to use.',
        steps: ['Mark hard stops and flexible segments. Confirm venue and catering constraints before shortening a break.', 'Choose an option for a late speaker, failed presentation laptop, or session overrun. Name who can approve each change.', 'For multiple tracks, duplicate the sheet by room and keep shared breaks and plenaries on a master timeline.'],
      },
      {
        id: 'brief-and-run', title: 'Walk through it with the crew',
        body: 'Read the sequence aloud at the production briefing. That is often when a missing handoff becomes obvious.',
        steps: ['Use one master version and record a version date. Share an offline copy with each room lead.', 'Have each owner confirm their first cue, prerequisites, and fallback. Resolve conflicts before doors open.', 'During the event, record actual start and end times. Afterward, use those notes to improve the next schedule.'],
      },
    ],
    columns: ['Planned start', 'Planned end', 'Duration (minutes)', 'Room', 'Segment', 'Owner (replace with name)', 'Cue / action', 'Ready when', 'Fallback / decision', 'Status', 'Actual start', 'Actual end', 'Notes'],
    rows: [
      ['07:30','08:00','30','Main hall','Crew and equipment check','Production lead','Check slides, microphones, playback, and room lighting','Venue access confirmed','Escalate equipment faults to AV lead before doors','Not started','','','Example schedule; use venue local time'],
      ['08:00','08:15','15','Main hall','Speaker sound check','Stage manager','Confirm pronunciation, microphone, and presentation order','Opening speaker on site','Use backup microphone and presentation laptop','Not started','','','Confirm the show caller'],
      ['08:15','08:30','15','Lobby','Front desk briefing','Registration lead','Confirm lanes, roster, escalation desk, and badges','Crew and check-in devices ready','Use controlled offline roster if connection fails','Not started','','','Keep exceptions out of the main queue'],
      ['08:30','09:00','30','Lobby / main hall','Doors and registration','Front-of-house lead','Open doors and direct attendees to seats','Room and front desk cleared to open','Hold doors if venue lead has not cleared the room','Not started','','','Show caller confirms opening'],
      ['09:00','09:10','10','Main hall','Welcome','Host','Deliver welcome and housekeeping; introduce speaker','Audience seated; speaker at stage','Host uses prepared holding remarks if speaker delayed','Not started','','','Hard stop at 09:10'],
      ['09:10','09:55','45','Main hall','Opening keynote','Stage manager','Cue speaker, slides, and agreed time signals','Welcome complete; slides loaded','Show caller agrees a shorter Q&A if running late','Not started','','','Confirm time signals with speaker'],
      ['09:55','10:10','15','Main hall','Audience questions','Host','Manage questions and close on time','Roving microphone ready','Use pre-agreed closing question if time is short','Not started','','','Protect the next room handoff'],
      ['10:10','10:40','30','Foyer','Break and stage reset','Room lead','Direct attendees to break; reset stage for panel','Catering and next speakers ready','Show caller confirms any timing change with catering','Not started','','','Brief the panel during the break'],
      ['10:40','11:30','50','Main hall','Panel discussion','Moderator','Introduce panel and manage discussion','Panel seated; all microphones checked','Use spare microphone if one fails','Not started','','','Include audience questions within the slot'],
      ['11:30','12:00','30','Main hall','Workshop and wrap-up','Facilitator','Lead activity and close the morning program','Materials ready at seats','Use verbal instructions if screen unavailable','Not started','','','Adapt remaining sessions to your event'],
      ['12:00','13:00','60','Foyer','Lunch and networking','Hospitality lead','Release attendees in agreed order','Catering lead confirms service ready','Host gives revised release instructions','Not started','','','Illustrative short conference program'],
      ['13:00','13:30','30','Main hall','Pack-down and venue handback','Production lead','Collect equipment and confirm room handback','Attendees clear; venue approves pack-down','Escalate delays to venue contact','Not started','','','Record actual finish and outstanding items'],
    ],
    previewColumns: [0,4,5],
    solutionSlugs: ['conference-management-software','virtual-and-hybrid-event-software','meetup-and-workshop-management-software'],
    solutionLabel: 'Explore conference management',
  },
  {
    slug: 'sponsor-deliverables-tracker',
    title: 'Sponsor deliverables tracker',
    category: 'Sponsors & exhibitors',
    description: 'Download a free sponsor deliverables tracker for deadlines, asset approvals, owners, and proof of delivery. Includes eight editable examples and a practical guide.',
    intro: 'Turn each sponsor commitment into a task with an owner, a deadline, and evidence that it was delivered.',
    includes: ['8 sample deliverables', 'Asset and approval deadlines', 'Proof-of-delivery and follow-up fields'],
    setup: 'These are illustrative commitments, not a standard sponsorship package. Replace them with the deliverables you actually agreed to. Convert each relative deadline into a calendar date based on your event date and supplier lead times. Use one row per sponsor deliverable.',
    sections: [
      {
        id: 'capture-commitments', title: 'Start with the agreed commitments',
        body: 'A package name such as “Gold” does not tell the delivery team what to do. Break the agreement into individual items with a clear quantity, placement, or duration.',
        steps: ['Create separate rows for website placement, signage, passes, email mentions, and sessions where applicable.', 'Write a completion criterion for each row: for example, “approved logo linked on the sponsor page.”', 'Record changes to scope in the notes and confirm them with the sponsor before changing the task.'],
      },
      {
        id: 'work-backward', title: 'Separate asset, approval, and delivery dates',
        body: 'The date a sign goes up is not the date the artwork should arrive. Give the team a visible sequence from receiving assets to delivering the commitment.',
        steps: ['Start with the supplier or publishing deadline, then work backward to allow for sponsor review and corrections.', 'Assign an internal owner and a sponsor approver for every item. Replace the sample role names before sharing.', 'If an asset is late, record the blocker, the next follow-up date, and the consequence for delivery.'],
      },
      {
        id: 'track-progress', title: 'Use statuses that explain the next action',
        body: 'Try: Not started, Waiting for sponsor, In progress, Awaiting approval, Delivered, and Blocked. The sheet starts with sample statuses; edit them to match your workflow.',
        steps: ['Review upcoming deadlines with the team at a regular interval, increasing frequency as the event approaches.', 'Filter by owner and status to find unresolved approvals and blocked tasks.', 'Keep a next-action note for anything blocked. A red status without an owner or next step will not resolve the problem.'],
      },
      {
        id: 'close-the-loop', title: 'Save proof as you deliver',
        body: 'Collect evidence while it is easy to obtain. A live page URL, approved artwork, or photo of the installed sign can make the post-event report much easier to prepare.',
        steps: ['Add the evidence link and actual delivery date before marking an item Delivered.', 'Describe precisely what each metric measures. Delivery of a placement does not establish sponsor ROI.', 'Send the agreed report and confirm outstanding items. Share attendee information only according to the permissions and terms that apply to your event.'],
      },
    ],
    columns: ['Sponsor', 'Package / agreement', 'Deliverable', 'Completion criterion', 'Internal owner', 'Sponsor approver', 'Asset due', 'Approval due', 'Delivery due', 'Status', 'Proof / evidence link', 'Actual delivery date', 'Next action / notes'],
    rows: [
      ['Example sponsor','Replace with agreement','Website logo','Approved logo and link visible on sponsor page','Partnerships lead','Sponsor contact','Event - 28 days','Event - 21 days','Event - 14 days','Not started','','','Request approved logo and destination URL'],
      ['Example sponsor','Replace with agreement','Printed signage','Approved logo on agreed sign; installation photo saved','Production lead','Sponsor contact','Event - 35 days','Event - 28 days','Event day before doors','Not started','','','Confirm artwork deadline with print supplier'],
      ['Example sponsor','Replace with agreement','Sponsor passes','Agreed number of passes issued to named recipients','Registration lead','Sponsor contact','Event - 21 days','Event - 14 days','Event - 7 days','Not started','','','Confirm pass quantity from agreement'],
      ['Example sponsor','Replace with agreement','Email mention','Approved copy in the agreed campaign; send record saved','Marketing lead','Sponsor contact','Event - 21 days','Event - 14 days','Event - 7 days','Not started','','','Confirm audience and scheduled send'],
      ['Example sponsor','Replace with agreement','Exhibitor space','Agreed location and setup instructions confirmed','Exhibitor lead','Sponsor contact','Event - 28 days','Event - 21 days','Event - 14 days','Not started','','','Confirm venue requirements and arrival window'],
      ['Example sponsor','Replace with agreement','Session acknowledgement','Host uses approved acknowledgement in agreed session','Program lead','Sponsor contact','Event - 14 days','Event - 7 days','Event day','Not started','','','Add the acknowledgement to the run of show'],
      ['Example sponsor','Replace with agreement','Agreed lead report','Report prepared using the event permissions and agreed scope','Partnerships lead','Sponsor contact','Event - 14 days','Event - 7 days','Event + 5 days','Not started','','','Confirm permitted data fields and sharing method'],
      ['Example sponsor','Replace with agreement','Delivery recap','Recap includes evidence and any outstanding commitments','Partnerships lead','Sponsor contact','Event + 2 days','Event + 5 days','Event + 7 days','Not started','','','Replace sample dates with agreed reporting deadlines'],
    ],
    previewColumns: [2,4,8],
    solutionSlugs: ['sponsor-and-exhibitor-management-software'],
    solutionLabel: 'Explore sponsor and exhibitor tools',
  },
  {
    slug: 'event-check-in-checklist',
    title: 'Event check-in checklist',
    category: 'Arrival & event day',
    description: 'A free event check-in checklist covering desk setup, QR scanning, badges, exception handling, and offline preparation. Download 18 editable tasks with owner fields.',
    intro: 'Prepare the desk, brief the crew, and give exceptions somewhere to go before the first attendee arrives.',
    includes: ['18 editable preparation tasks', 'Suggested timing and owner roles', 'Completion criteria for each task'],
    setup: 'Use this as a starting point for your venue and registration process. Assign a named owner to every task and replace the suggested timing with actual dates. Add venue-specific access, accessibility, and emergency procedures with your venue contact.',
    sections: [
      {
        id: 'plan-the-arrival', title: 'Plan for the busiest arrival window',
        body: 'Total attendance alone does not describe the queue. Consider when people arrive, how long a normal check-in takes, and which issues need a separate conversation.',
        steps: ['Map the route from the entrance to check-in and onward to the event. Check the route with the venue for accessibility and clear exits.', 'Time a practice check-in using the real device and badge setup. Use that result and expected peak arrivals to plan staffing.', 'Set aside a clearly marked help point for missing registrations, badge changes, and payment questions.'],
      },
      {
        id: 'test-the-desk', title: 'Test the full journey on the actual equipment',
        body: 'A charged device is not a completed test. Run from an attendee confirmation through scanning, registration lookup, and badge output at the venue.',
        steps: ['Test QR scanning and manual lookup with a designated test registration. Check the behavior when the same registration is scanned again.', 'Print a sample badge and check name readability, alignment, and the QR code. Bring spare consumables for the equipment you use.', 'Test the venue connection and agree an offline procedure. Keep any roster copy access-controlled and reconcile offline check-ins afterward.'],
      },
      {
        id: 'brief-the-team', title: 'Make exception handling a clear handoff',
        body: 'Give front-desk staff a short script and an escalation owner. They should know what they can resolve and when to bring in someone else.',
        steps: ['Agree the process for missing names, duplicate scans, substitutions, and unpaid registrations before doors open.', 'Assign one person to triage the queue and direct attendees to the right desk.', 'Confirm who can approve admission exceptions. Keep private registration and payment discussions at the help point.'],
      },
      {
        id: 'run-and-close', title: 'Watch the queue, then reconcile the records',
        body: 'During arrival, the desk lead should be free to spot a growing queue or repeated issue. After the rush, capture what the next shift needs to know.',
        steps: ['Check queue length, equipment, and badge supplies during the busiest window. Move staff as needed while keeping the accessible route clear.', 'Log unresolved issues and brief replacement staff before handing over.', 'Reconcile offline records, secure devices and printed rosters, and handle copies according to your event data-retention process.'],
      },
    ],
    columns: ['Suggested timing', 'Task', 'Owner (replace with name)', 'Done when', 'Status', 'Completed at', 'Notes'],
    rows: [
      ['1 week before','Map arrival route and desk layout','Venue liaison','Accessible route and clear exits checked with venue','Not started','',''],
      ['1 week before','Estimate peak arrivals and staffing','Registration lead','Staffing plan informed by timed practice check-ins','Not started','',''],
      ['1 week before','Agree admission and exception rules','Event lead','Approvers and escalation contacts shared with crew','Not started','',''],
      ['2 days before','Review registration data and badge fields','Registration lead','Required fields and badge display checked','Not started','',''],
      ['2 days before','Prepare help-point process','Desk lead','Missing names, duplicate scans, and changes have a handoff','Not started','',''],
      ['2 days before','Prepare controlled offline fallback','Registration lead','Authorized crew can access fallback and know reconciliation steps','Not started','',''],
      ['1 day before','Check devices and chargers','Technical lead','Devices charged; power supplies and spares packed','Not started','',''],
      ['1 day before','Test badges and consumables','Badge lead','Sample badge readable; spare stock available','Not started','',''],
      ['Before doors','Test the venue connection','Technical lead','Actual desk devices connect and complete a test check-in','Not started','',''],
      ['Before doors','Test scan, lookup, and duplicate behavior','Desk lead','Crew understand normal and exception responses','Not started','','Use a designated test registration'],
      ['Before doors','Place signs and define queue lanes','Front-of-house lead','Attendees can identify check-in and help point','Not started','',''],
      ['Before doors','Brief crew and name escalation owner','Event lead','Each staff member knows their role and handoff','Not started','',''],
      ['Before doors','Confirm opening with venue lead','Desk lead','Venue and desk teams confirm readiness','Not started','',''],
      ['During arrival','Monitor queue and accessible route','Queue host','Issues identified and staff adjusted when needed','Not started','','Repeat during peak arrival'],
      ['During arrival','Monitor badge stock and equipment','Badge lead','Refills and replacements ready before supplies run out','Not started','',''],
      ['At shift change','Hand over unresolved issues','Desk lead','Incoming crew briefed on current issues','Not started','',''],
      ['After arrival','Reconcile offline check-ins','Registration lead','Offline and online records reviewed for duplicates','Not started','',''],
      ['After event','Secure devices and roster copies','Event lead','Access and copies handled under event retention process','Not started','',''],
    ],
    previewColumns: [0,1,2],
    solutionSlugs: ['event-check-in-and-badge-printing','event-registration-software'],
    solutionLabel: 'Explore check-in and badge printing',
  },
];
