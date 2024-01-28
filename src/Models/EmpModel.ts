class EmpModel{
    public id:number
    public firstName:string
    public lastName:string
    public title:string
    public country:string
    public city:string
    public birthDate:string
    public imageUrl:string
    public image:FileList


    public static stringValidation = {
        required: {value: true, message: "Missing text"},
        minLength: {value: 3, message: "Text too short"},
        maxLength: {value:100, message: "Text too long"}
    }
}

export default EmpModel