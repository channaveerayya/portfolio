export const preferHomePagePayloadToSend = () => {}

export const bufferToBase64Img = (data) =>
  "data:image/jpg;base64," + new Buffer.from(data)

export const removeBase64Jpg = (data) =>
  data.replace("data:image/jpg;base64,", "")

export const removeBase64PDF = (data) =>
  data.replace("data:application/pdf;base64,", "")

export const bufferToBase64PDF = (data) => {
  let pdf = new Buffer.from(data, "base64").toString("ascii")
  return `data:application/pdf;base64,${pdf}`
}

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
