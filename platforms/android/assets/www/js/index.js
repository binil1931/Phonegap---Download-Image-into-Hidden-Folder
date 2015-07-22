document.addEventListener("deviceready", onDeviceReady, false);
 
 var URL= "http://www.keenthemes.com/preview/metronic/theme/assets/global/plugins/jcrop/demos/demo_files/image1.jpg";
 var Folder_Name="appfiles";
 var File_Name="image";
 
 
function onDeviceReady() {
	alert("ready");
	DownloadFile(URL, Folder_Name, File_Name);
}

function DownloadFile(URL, Folder_Name, File_Name) {
 	 if (URL == null && Folder_Name == null && File_Name == null) 
  	{
  	  return;
 	 }
	else 
	{
  	  //var networkState = navigator.connection.type;
  	  download(URL, Folder_Name, File_Name); //If available download function call
  	}
}

function download(URL, Folder_Name, File_Name) {

   	 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);
   	 function fileSystemSuccess(fileSystem) 
   	 {
		alert("folder creation");
    
   		var download_link = encodeURI(URL);
    	ext = download_link.substr(download_link.lastIndexOf('.') + 1); //Get extension of URL
	    var path = cordova.file.dataDirectory  + File_Name + "." + ext;
    	alert("phoneGapPath " + path);
   	    filetransfer(download_link, path);
 } 

  function fileSystemFail(evt)
   {
    alert(evt.target.error.code);
  }
}

function filetransfer(download_link, fp) {
   var fileTransfer = new FileTransfer();
   fileTransfer.download(download_link, fp,
                    function(entry) {
                    
                    alert("complete " + entry.fullPath);
                    
                    var smallImage = document.getElementById('smallImage');
                    smallImage.style.display = 'block';
                    smallImage.src = cordova.file.dataDirectory + entry.fullPath;
                    
        console.log("download complete: " + entry.fullPath);
    },
    function(error) {
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("upload error code" + error.code);
    },
    false,
    {
        headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        }
    }
);
}
