// Hàm để kiểm tra xem một chuỗi có phải là JSON hợp lệ hay không
function isValidJSON(jsonString) {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (error) {
      return false;
    }
  }

//----- Hàm để hiển thị dữ liệu dưới dạng Dictionary
function displayProperties(parsedJSON, parentElement) {
    var list = document.createElement("ul");
  
    for (var key in parsedJSON) {
      if (parsedJSON.hasOwnProperty(key)) {
        var listItem = document.createElement("li");
        listItem.textContent = key;
  
        if (typeof parsedJSON[key] === 'object') {
          var nestedList = displayProperties(parsedJSON[key]);
          listItem.appendChild(nestedList);
        }
  
        list.appendChild(listItem);
      }
    }
  
    return list;
  }
  
  document.getElementById("submitButton").addEventListener("click", function() {
    var apiJSON = document.getElementById("apiInput").value;
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = ''; // Xóa nội dung trước đó nếu có
  
    if (isValidJSON(apiJSON)) {
      var parsedJSON = JSON.parse(apiJSON);
      // Hiển thị dữ liệu dưới dạng Dictionary
      var dictionaryElement = displayProperties(parsedJSON);
      resultElement.appendChild(dictionaryElement);
    } else {
      resultElement.innerHTML = "<div style='color: red;'>API JSON không hợp lệ. Vui lòng nhập lại.</div>";
    }
  });
  
