function getFileSize(url)
            {
                var fileSize = '';
                var http = new XMLHttpRequest();
                    http.open('HEAD', url, false); // false = Synchronous

                    http.send(null); // it will stop here until this http request is complete

                    if (http.status === 200) {
                        fileSize = (http.getResponseHeader('content-length')/1000000).toFixed(2); // Divide result with Bytes to get MB and round to 2 digits
                    }

                    return fileSize; // return Filesize in MB
}
              
            
