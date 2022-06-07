import { useState } from "react"
import {
  Box,
  Input
} from "@chakra-ui/react"
import ToolbarButton from 'components/ToolbarButton';
import AWS from 'aws-sdk';

export const AttachFile = () => {
  const [previewString, setPreview] = useState("")
  const [file, setFile] = useState(null)

  // const s3UploadImage = (_folder, _filename, file) => {
  //   let _key = `messenger/${_filename}.${file?.type?.replace('image/', '')}`
  //   const s3Params = {
  //     Bucket: process?.env?.REACT_APP_BUCKET,
  //     Key: _key,
  //     Body: file,
  //     ContentType: file.type,
  //   };
  //   const bucket = new AWS.S3({
  //     accessKeyId: process.env.REACT_APP_BUCKET_ACCESS_KEY,
  //     secretAccessKey: process.env.REACT_APP_BUCKET_SECRET,
  //     region: "ap-northeast-1"
  //   });
  //   setUploading(true)
  //   return bucket.upload(s3Params, async function(err) {
  //     setUploading(false)
  //     if (err) {
  //       console.log('There was an error uploading your file: ', err);
  //       return
  //     }
  //     console.log('--- success')
  //   }).on('httpUploadProgress', function(progress) {
  //     let progressPercentage = Math.round(progress.loaded / progress.total * 100);
      
  //   })
  // }

  // const onUpload = () => {
  //   s3UploadImage(currentDir, fileName, imageFile)
  // }

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0] 
      setFile(file)
      // s3UploadImage(file)
      const reader = new FileReader();
      reader.onload = (readerEvt) => {
        let binaryString = URL.createObjectURL(file)
        setPreview(binaryString)
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  return (
    <Box position="relative">
      <Box opacity={0}>
        <ToolbarButton icon="ion-ios-attach" />
      </Box>
      <Box
        position="absolute"
        top="0"
        left="0"
        height="100%"
        width="100%"
        display="flex"
        flexDirection="column"
        cursor="pointer"
      >
        <ToolbarButton icon="ion-ios-attach" />
      </Box>
      <Input
        cursor="pointer"
        onChange={onSelectFile}
        type="file"
        height="100%"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        opacity="0"
        aria-hidden="true"
      />
    </Box>
  )
}