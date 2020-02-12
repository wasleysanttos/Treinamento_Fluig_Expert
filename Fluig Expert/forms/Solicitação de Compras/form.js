
function setSelectedZoomItem(selectedItem) {
	
    var obj = selectedItem.inputName;

	if(obj == "txt_paisUnidade"){
		var inputName= "txt_estadoUnidade";
		var filterValues = "filtroEstado," + selectedItem.sigla;
		
		reloadZoomFilterValues(inputName, filterValues);
	}
}

function removedZoomItem(removedItem) {
	var obj = removedItem.inputName;
	
	if(obj == "txt_paisUnidade"){
		window["txt_estadoUnidade"].clear();
		var inputName= "txt_estadoUnidade";
		var filterValues = "filtroEstado,";
		
		reloadZoomFilterValues(inputName, filterValues);
	}
}