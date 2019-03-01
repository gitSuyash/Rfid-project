//local sheet convert var url = "test.xlsx";

/* set up async GET request */
// var req = new XMLHttpRequest();
// req.open("GET", 'http://127.0.0.1:8080/test.xlsx', true);
// req.responseType = "arraybuffer";

// req.onload = function(e) {
//   var data = new Uint8Array(req.response);
//   var workbook = XLSX.read(data, {type:"array"});

//   /* DO SOMETHING WITH workbook HERE */
//   var first_sheet_name = workbook.SheetNames[0];
// var address_of_cell = 'A1';

// /* Get worksheet */
// var worksheet = workbook.Sheets[first_sheet_name];
// console.log(XLSX.utils.sheet_to_json(worksheet))
// }er

//google sheets converter
<script> 
function doGet(e){

 // Change Spread Sheet url
 var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1slEg8kbO6JTVn5pnQWo8E5YxVow24aiw0g2hy9F0vJQ/edit#gid=0");

// Sheet Name, Chnage Sheet1 to Users in Spread Sheet. Or any other name as you wish
 var sheet = ss.getSheetByName("Users");
  
 return getUsers(sheet); 
  
}


function getUsers(sheet){
  var jo = {};
  var dataArray = [];

// collecting data from 2nd Row , 1st column to last row and last column
  var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
  
  for(var i = 0, l= rows.length; i<l ; i++){
    var dataRow = rows[i];
    var record = {};
    record['id'] = dataRow[0];
    record['name'] = dataRow[1];
    record['des'] = dataRow[2];
    dataArray.push(record);
    
  }  
  
  jo.user = dataArray;
  
  var result = JSON.stringify(jo);
  
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  
}  
  
</script>