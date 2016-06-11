module.exports = {
    user: {
        name: {type: String, required: true},
        password: {type: String, required: true},
        level: {type: Number, default: 0, required: true}//级别
    },
    commodity: {
        name: String,
        price: Number,
        imgSrc: String
    },
    cart: {//记录（购物车&购买记录）
        uId: {type: String},
        cId: {type: String},
        cName: {type: String},
        cPrice: {type: String},
        cImgSrc: {type: String},
        cQuantity: {type: Number},
        cStatus: {type: Boolean, default: false}
    },
    textbook: {//教材
        bookId: {type: Number, required: true},//教材编号
        name: String,//教材名
        price: Number,//价格
        press: String,//出版社
        supplier: String//供应商
    },
    department: {//院系
        name: String//院系名
    },
    profession: {//专业
        name: String,//专业名
        departmentId: String,//院系id
        departmentName: String//院系名称
    },
    grade: {//年级
        name: String,//年级名
        grade: Number,//年级
        professionId: String,//专业id
        professionName: String,//专业名称
        departmentId: String,//院系id
        departmentName: String//院系名称
    },
    class: {//班级
        name: String,//班级名
        gradeId: String,//年级id
        gradeName: String,//年级名称
        professionId: String,//专业id
        professionName: String,//专业名称
        departmentId: String,//院系id
        departmentName: String//院系名称
    },
    stock: {//库存表
        bookId: {type: String},//教材编号
        time: {type: String},//时间
        number: {type: Number},//数量
        operation: {type: Number}//操作
    },
    record: {//发放记录


    }
    //发放记录
};
