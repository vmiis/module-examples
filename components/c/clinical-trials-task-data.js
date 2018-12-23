//-------------------------------------
m.set_req=function(){
    if(m.input!=undefined && m.input.record!=undefined){
        m.query={App:m.module.App,Table:m.module.Table,'Data.Participant_uid':m.input.record.UID.toString()}
    }
    else{
        m.query={App:m.module.App,Table:m.module.Table}
    }
};
//-------------------------------------
m.load=function(){
    if(m.input!=undefined && m.input.record!=undefined){
        $('#export_section__ID').hide();
    }
    else{
        $('#export_section__ID').show();
    }
}
//-------------------------------------
m.cell_render=function(records,I,field,td){
    switch(field){
        case '_Status':
            td.html("<span style='color:"+records[I].Data['sysStatus']+"'>&#x25cf;</span>");
            break;
        case '_Participant_ID':
            td.html(records[I].Data.Participant_uid);
            break;
    }
}
//-------------------------------------
m.new=function(){
    if(m.module.form_module!=undefined){
        //we are using child panel
        var participant_record=$vm.vm['__ID'].input.record;
        $vm.load_module(m.form_module,'',{participant_record:participant_record,goback:1});
    }
}
//-------------------------------------
