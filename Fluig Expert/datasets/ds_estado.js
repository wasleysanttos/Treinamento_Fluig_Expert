function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var pais = null;
	
	log.dir(constraints);
	
	if(constraints != null){
		for(var i=0; i < constraints.length; i++){
			if(constraints[i].fieldName == "filtroEstado"){
				pais = constraints[i].initialValue;
			}
		}
	}
	
	log.info("Valor recebido: " + pais);
	
	var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("estado");
	dataset.addColumn("sigla");
	
	if(pais == "BR"){
		dataset.addRow(new Array("São Paulo", "BR"));
	} else if(pais == "MX"){
		dataset.addRow(new Array("Veracruz", "MX"));
	} else if(pais == "AR"){
		dataset.addRow(new Array("Buenos Aires", "AR"));
	} else if(pais == "CL"){
		dataset.addRow(new Array("Santiago", "CL"));
	} else if(pais == "UY"){
		dataset.addRow(new Array("Montevidéu", "UY"));
	}

	return dataset;
	
}function onMobileSync(user) {

}