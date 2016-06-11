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
    speciality: {//专业
        name: String,//专业名
        grade: Number,//年级
        department: String//院系
    },
    warehouse: {//仓库
        wId: {type: String},//仓库号
        sId: {type: String},//教材编号
        intime: {type: String},//入库时间
        outoftime: {type: String}//出库时间
    }
    //发放记录
    //班级 （年级id，院系id）
    //年级
    //院系
};
