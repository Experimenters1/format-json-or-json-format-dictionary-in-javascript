// Hàm để kiểm tra xem một chuỗi có phải là JSON hợp lệ hay không
function isValidJSON(jsonString) {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (error) {
      return false;
    }
  }
  
  document.getElementById("submitButton").addEventListener("click", function() {
    var apiJSON = document.getElementById("apiInput").value;
    var resultElement = document.getElementById("result");
  
    if (isValidJSON(apiJSON)) {
      var parsedJSON = JSON.parse(apiJSON);
      resultElement.innerHTML = "<pre>" + JSON.stringify(parsedJSON, null, 2) + "</pre>";
    } else {
      resultElement.innerHTML = "<div style='color: red;'>API JSON không hợp lệ. Vui lòng nhập lại.</div>";
    }
  });
  