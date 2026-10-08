/* =====================================================
   EDIT THIS FILE to update the website content.
   ===================================================== */

/* Demo video: paste a YouTube video ID (the part after watch?v=). Leave "" to show the placeholder. */
const DEMO_VIDEO_ID = "";

/* Contact form: create a free form at https://formspree.io and put its ID in index.html (action="https://formspree.io/f/YOUR_FORM_ID"). */

const DRIVE_FOLDER = "https://drive.google.com/drive/folders/1NJbVSpjDbUlP2yVa8q1N7v0w4Q7WDQF-?usp=sharing";

/* Downloads: put a Google Drive file link to enable the button ("" shows "Available soon").
   For several files, use a list of [label, link] pairs (see Project Proposal). */

/* Milestones. Marks below follow the SLIIT allocation used by previous research groups — confirm against your module outline. */
const MILESTONES=[
  {date:"March 2026",title:"Project Proposal",desc:"Presentation and report defining the research problem, objectives and proposed solution for approval.",marks:12},
  {date:"May 2026",title:"Progress Presentation I",desc:"Review of 50% completion, highlighting gaps or inconsistencies in the design and requirements.",marks:15},
  {date:"Date TBC",title:"Research Paper",desc:"Paper describing the contribution to existing knowledge, with due recognition of referenced work.",marks:10},
  {date:"Date TBC",title:"Progress Presentation II",desc:"Review of 90% completion with a system demonstration and research poster.",marks:18},
  {date:"Date TBC",title:"Website Assessment",desc:"Public website presenting the research scope, milestones, documents and team.",marks:2},
  {date:"Date TBC",title:"Progress Reports & Logbook",desc:"Status reports and the weekly logbook signed by the supervisor.",marks:4},
  {date:"Date TBC",title:"Final Report",desc:"Individual and group final reports documenting the complete research and its evaluation.",marks:19},
  {date:"Date TBC",title:"Final Presentation & Viva",desc:"Final demonstration of the complete system followed by an individual viva.",marks:20}
];
const DOCS=[
  ["Topic Assessment","Topic Assessment Form (TAF)","https://drive.google.com/file/d/1hhhpFu8ep5x-lBX_dxCQxlZkQRE61Ph7/view?usp=sharing"],
  ["Project Proposal","Individual proposal reports",[
    ["Salgado M.B.U.","https://drive.google.com/file/d/11sNS4Dn4IW_RZy3SzUCT_wryT-R8-3RN/view?usp=sharing"],
    ["De Silva T.R.R.","https://drive.google.com/file/d/1rMkf9B3knqPg6aNeiHdIXVq5v0UBlBq6/view?usp=sharing"],
    ["Sampath P.D.D.I.","https://drive.google.com/file/d/1beK1k9TlLg1NLCaJPI1pO-rWrlB2DZKQ/view?usp=sharing"],
    ["Himasha Y.H.P.","https://drive.google.com/file/d/1fHnDKrR7ztBAHDcxWczFJXCLMVtMMKzb/view?usp=sharing"]
  ]],
  ["Research Paper","Paper submitted for publication",""],
  ["Final Report","Group and individual final reports",""]
];
const PRES=[
  ["Proposal Presentation","https://drive.google.com/file/d/11QsB1Mz98ZnlGR_d0I1-vekERx6K_Jws/view?usp=sharing"],
  ["Progress Presentation I","https://drive.google.com/file/d/11vdQithbPgB5xwi77UUZp_U-Uuy_1tL3/view?usp=sharing"],
  ["Progress Presentation II","https://drive.google.com/file/d/1-ALQJZX8B208tCrI_Lu1tYvpbmoCdeW1/view?usp=sharing"],
  ["Final Presentation",""]
];
/* Team: photo = path like "images/team/salgado.jpg", linkedin = full URL, email = address. */
const SUPS=[
  {name:"Ms. Dushanthi Kuruppu",role:"Supervisor",meta:"Lecturer<br>Department of First Year Division<br>Faculty of Computing",photo:"images/team/dushanthi-kuruppu.jpg",linkedin:"https://www.linkedin.com/in/sadeepa-kuruppu-588179190/",email:"dushanthi.k@sliit.lk"},
  {name:"Ms. Kaushika Kavindi",role:"Co-supervisor",meta:"Assistant Lecturer<br>Department of Information Technology<br>Faculty of Computing",photo:"images/team/kaushika-kavindi.jpg",linkedin:"https://www.linkedin.com/in/kaushi/",email:"kaushika.k@sliit.lk"}
];
const TEAM=[
  {name:"Salgado M.B.U.",role:"Group Leader",meta:"Popularity Metrics Analysis<br>Department of Information Technology",photo:"images/team/salgado.jpg",linkedin:"https://www.linkedin.com/in/bhagya-salgado-b640a520a/",email:"mbhagyasalgado@gmail.com"},
  {name:"De Silva T.R.R.",role:"Group Member",meta:"Comment Sentiment Analysis<br>Department of Information Technology",photo:"images/team/de-silva.jpg",linkedin:"https://www.linkedin.com/in/rivithranjuna/",email:"it22236296@my.sliit.lk"},
  {name:"Sampath P.D.D.I.",role:"Group Member",meta:"Insight & Recommendation Engine<br>Department of Information Technology",photo:"images/team/sampath.jpg",linkedin:"",email:""},
  {name:"Himasha Y.H.P.",role:"Group Member",meta:"Video & Audio Analysis<br>Department of Information Technology",photo:"images/team/himasha.jpg",linkedin:"",email:""}
];
