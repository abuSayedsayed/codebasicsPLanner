// datas
// data
const mlVideoIds = [
  "gmvvaobm7eQ",
  "8jazNUpO3lQ",
  "J_LnPL3Qg70",
  "vsWrXfO3wWw",
  "KfnhNlD8WZI",
  "9yl6-HEY7_s",
  "fwY9Qv96DJY",
  "zM4VZR0px8E",
  "J5bXOOmkopc",
  "PHxYNGo8NcI",
  "FB5EdxAGxQg",
  "ok2s1vV9XW0",
  "gJo0uNL-5Qw",
  "EItlUEPCIzM",
  "PPeaRc-r1OI",
  "nHIUYwN-5rM",
  "HdlDYng8g9s",
  "VqKq78PVO9g",
  "CQveSaMyEwM",
  "8klqIM9UvAc",
  "B01qMFMAgUQ",
  "RtrBtAKwcxQ",
  "rdfbcdP75KI",
  "_drqJ9SFCgU",
  "gMoJIH0prL4",
  "cbqZa_1vzcg",
  "oCiRv94GMEc",
  "Q5JyawS8f5Q",
  "rD2xumR98w8",
  "q8NOmLD5pTU",
  "qWXXHjV3JHI",
  "m1dQ38qDABw",
  "kwKfWBb6frs",
  "sWAPtaBZKBQ",
  "5Uc_m9CRWro",
  "NtNl97LlpOk",
  "idMKTkfeo4A",
  "W-PmvEeHioQ",
  "pYVScuY-GPk",
  "7sJaRHF03K8",
  "KFuEAGR3HS4",
  "A3gClkblXK8",
];
const dlVideoIds = [
  "Mubj_fqiAv8",
  "yfsTZbwgMSE",
  "VhRtaziEWd4",
  "ER2It2mIagI",
  "VC-EliTgMEM",
  "z-ZR_8BZ1wQ",
  "iqQgED9vV7k",
  "icZItWxw7AI",
  "cT4pQT5Da0Q",
  "Wibxjrxf5ko",
  "E1yyaLRUnLo",
  "pXGBHV3y8rs",
  "PQCE9ChuIDY",
  "IU5fuoYBTAM",
  "5ogmEkujoqE",
  "9SdLOcGnebU",
  "YmDaqXMIoeY",
  "MSBY28IJ47U",
  "2osIZ-dSPGE",
  "lcI8ukTUEbo",
  "JnlM4yLFNuo",
  "aDpnaxPAmtU",
  "zfiSAzpy9NM",
  "7HPwo4wnJeA",
  "oDAPkZ53zKk",
  "mTVf7BN7S8w",
  "LsdxvjLWkIY",
  "taC5pMCm70U",
  "SfqN-Hc5two",
  "AimW3j7M2Uw",
  "ag3DLKsl2vk",
  "IfRMV2MY9n0",
  "Y2wfIKQyd1I",
  "EzsXi4WzelI",
  "qowp6SQ9_Oo",
  "LfnrRPFhkuY",
  "tOuXgORsXJ4",
  "atYPhweJ7ao",
  "sZGuyTLjsco",
  "Fuw0wv3X-0o",
  "hQwFeIupNP0",
  "Q2NtCcqmIww",
  "95OyAjIZAbs",
  "VFEOskzhhbc",
  "MLEKEplgCas",
  "7kLi8u2dJz0",
  "hOCDJyZ6quA",
  "P-5sMcpTE0g",
  "v1oHf1KV6kM",
];

const mainVideo = document.getElementById("mainVideo");
const compleateBtn = document.getElementById("btn");
const videoNumber = document.getElementById("videoNumber");

// first check if local id exists
// if exists than =>set the main video o this index id
// Otherwise set the main video to 0
window.onload = function () {
  //   Getting the path name as we maintain two static html pages in one website
  const currentPage = window.location.pathname;

  //   Checking for page
  if (currentPage === "/") {
    // THis case will handle to Machine learning page
    updateHtml("ml");
    setVideoNumber("ml")
    setProgress("dl")
    compleateBtn.addEventListener("click", function (e) {
      updateData("ml");
      updateHtml("ml");
      setVideoNumber("ml")
      setProgress("dl")
    });
  } else {
    // THis case will handle to Machine learning page
    updateHtml("dl");
        setVideoNumber("dl")
        setProgress("dl")
    compleateBtn.addEventListener("click", function (e) {
      updateData("dl");
      updateHtml("dl");
        setVideoNumber("dl")
        setProgress("dl")
    });
  }
};

// LOcal Storage realatead operations
// GEtting a value from local storage
function getData(name) {
  const data = localStorage.getItem(name);
  if (!data) {
    setData(name, { currentId: 0 });
    return { currentId: 0 };
  } else {
    return JSON.parse(data);
  }
}

// Setting a value in a local storage
function setData(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}
// UPdating data
function updateData(name) {
  const prevValue = localStorage.getItem(name);
  const prevId = JSON.parse(prevValue).currentId;
  localStorage.setItem(name, JSON.stringify({ currentId: prevId + 1 }));
}

// update html
function updateHtml(dataSource) {
  const currentId = getData(dataSource).currentId;
  if (dataSource === "ml") {
    injectHtml(mlVideoIds[currentId]);
  } else {
    injectHtml(dlVideoIds[currentId]);
  }
}
// defining the function for injecting markup to html
function injectHtml(videoId) {
  mainVideo.innerHTML = `<iframe width="100%" height="600px" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}
// disabling button for min 3 minutes

function setVideoNumber(source){
    const videoNumber  = document.getElementById("videoNumber")
    videoNumber.innerText=getData(source).currentId+1
}

function setProgress(source){
    const currentId=getData(source).currentId+1
    const progrss=document.getElementById("progress")
    let total
    if(source==="ml"){
        total=mlVideoIds.length
    }else{
        total=dlVideoIds.length
    }
    const percent=Math.round((currentId/total)*100)
    progrss.innerText=`${percent}%`
}