const tableData = [
  [
    "実装",
    "PCでぐるぐる",
    "iOS(safari)∩画面触ってぐるぐる",
    "iOS(safari)∩加速度使ってぐるぐる",
    "iOS(safari)∩VR表示∩加速度使ってぐるぐる",
    "Android(Chrome)∩画面触ってぐるぐる",
    "Android(Chrome)∩加速度使ってぐるぐる",
    "Android(Chrome)∩VR表示∩加速度使ってぐるぐる",
  ],
  [
    "<a href='./Aframe_simple.html'>Aframeそのまま</a>",
    "◯",
    "△<br />左右だけ",
    "◯",
    "×",
    "◯",
    "◯",
    "◯",
  ],
  ["データ6", "データ7", "データ8", "データ9", "データ10"],
  ["データ11", "データ12", "データ13", "データ14", "データ15"],
  ["データ16", "データ17", "データ18", "データ19", "データ20"],
  ["データ21", "データ22", "データ23", "データ24", "データ25"],
];

function generateTable(data) {
  const table = document.getElementById("dynamicTable");

  data.forEach((rowData, rowIndex) => {
    const row = document.createElement("tr");

    rowData.forEach((cellData) => {
      const cell = document.createElement(rowIndex === 0 ? "th" : "td");
      cell.innerHTML = cellData;
      row.appendChild(cell);
    });

    table.appendChild(row);
  });
}

generateTable(tableData);
