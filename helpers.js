

 //defining the storage location for files
 const fileFilter = (req, file, cb) => {
    // if(!file.origionalName.match(/\.()))
    if(file.fieldname ==="resume") {
        if(
            file.mimetype === 'application/pdf' ||
            file.mimetype === 'application/msword' ||
            file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ){
            cb(null,true);// check file type to be pdf, doc, or docx
        }else {
            req.fileValidationError = 'Only pdf, msword,docx files are allowed!';
            return cb(new Error('Only pdf, msword,docx files are allowed!'), false)
           // cb(null, false);
        }
    // }else {
    //     if (
    //         file.mimetype === 'image/png' ||
    //         file.mimetype === 'image/jpg' ||
    //         file.mimetype === 'image/jpeg'
    //       ) {
    //         cb(null, true);
    //       } else {
    //         cb(null, false); // else fails
    //       }
     }
};
exports.fileFilter = fileFilter;