import {InjectionToken} from "@angular/core";
import {IAppConfig} from "./iapp.config";

export let APP_CONFIG = new InjectionToken("app.config");
export const AppConfig : IAppConfig = {
    routes : {
        admin : 'admin',
        www : '',
        error404 : '404'
    },

    endpoints : {
        special : "http://127.0.0.1"
    },

    topSpecialLimit : 5,
    snackBarDuration : 3000,

    specTypeList : ["--", "Hospital", "Pharmacy", "Optical", "HMO", "Dental", "Diagnostics", "Gym & Wellness", "Consultant"],
    rateList : ["Poor", "Fair", "Average", "Good", "Excellent"],
    typeList : ["primary", "secondary"],
    tempList : [
        {
            id : 1,
            name : "Karu Customs Hospital",
            desc : "Gov. Nasir el-Rufai of Kaduna state has described the new Customs Hospital in Karu, FCT, as the most equipped medical facility in the country.",
            smallImage : "/assets/images/hospitals/thumnails/01.png",
            type : 1,
            reviewCount : 234,
            rate : 280, // = sum(each blog rate) / blog(review) count
            eachRate : {
                facility_ambiance : 40,// = sum(each blog facility_ambiance rate) / blog(review) count
                professionalism : 20,// = sum(each blog professionalism  rate) / blog(review) count
                time_efficiency : 100, // = sum(each blog tat_turn_around_time rate) / blog(review) count
                customer_service : 70,// = sum(each blog customer_service rate) / blog(review) count
                over_all_experience : 50// = sum(each blog over_all_experience rate) / blog(review) count
            },
            location : "Abuja Karu Nigeria",
            longitude : 7.491302,
            latitude : 9.072264,
            url : "http://www.google.com",
            tel : "01-234-4567-8929",
            bigImage : "/assets/images/hospitals/01/main.jpg",
            thumbs : [
                "/assets/images/hospitals/01/s1.jpg",
                "/assets/images/hospitals/01/s2.jpg",
                "/assets/images/hospitals/01/s3.jpg",
                "/assets/images/hospitals/01/s4.jpg"
            ],
            status : 1, // 1:approved 0:pending
            regdate : "2018/05/24 03:24:22"
          },
          {
            id : 2,
            name : "IBOM SPECIALIST HOSPITAL",
            desc : "The Ibom Multi-specialist Hospital has some of the world best manpower, deployed to run both administrative and medical proceedings.",
            smallImage : "/assets/images/hospitals/thumnails/04.png",
            type : 2,
            reviewCount : 235,
            rate : 350, // = sum(each blog rate) / blog(review) count
            eachRate : {
                facility_ambiance : 70,// = sum(each blog facility_ambiance rate) / blog(review) count
                professionalism : 80,// = sum(each blog professionalism  rate) / blog(review) count
                time_efficiency : 100, // = sum(each blog tat_turn_around_time rate) / blog(review) count
                customer_service : 40,// = sum(each blog customer_service rate) / blog(review) count
                over_all_experience : 60// = sum(each blog over_all_experience rate) / blog(review) count
            },
            location : "Akwa Ibom Nigeria",
            longitude : 7.491302,
            latitude : 9.072264,
            url : "http://www.google.com",
            tel : "86-435-2346-6542",
            bigImage : "/assets/images/hospitals/02/main.jpg",
            thumbs : [
                "/assets/images/hospitals/02/s1.jpg",
                "/assets/images/hospitals/02/s2.jpg",
                "/assets/images/hospitals/02/s3.jpg",
                "/assets/images/hospitals/02/s4.jpg"
            ],
            status : 1, // 1:approved 0:pending
            regdate : "2018/05/15 09:42:43"
          },
          {
            id : 3,
            name : "Nigerian Turkish Nizamiye Hospital",
            desc : "Nizamiye Hospital is located in Abuja, provides a high quality health care service in all medical specialities in its 5 storey building with a covered area of 12.000 m2 since 2013.",
            smallImage : "/assets/images/hospitals/thumnails/03.png",
            type : 3,
            reviewCount : 158,
            rate : 400, // = sum(each blog rate) / blog(review) count
            eachRate : {
                facility_ambiance : 90,// = sum(each blog facility_ambiance rate) / blog(review) count
                professionalism : 80,// = sum(each blog professionalism  rate) / blog(review) count
                time_efficiency : 100, // = sum(each blog tat_turn_around_time rate) / blog(review) count
                customer_service : 40,// = sum(each blog customer_service rate) / blog(review) count
                over_all_experience : 90// = sum(each blog over_all_experience rate) / blog(review) count
            },
            location : "Abuja Turkish Nizamiye Nigeria",
            longitude : 7.491302,
            latitude : 9.072264,
            url : "http://www.google.com",
            tel : "54-236-6457-4638",
            bigImage : "/assets/images/hospitals/03/main.jpg",
            thumbs : [
                "/assets/images/hospitals/03/s1.jpg",
                "/assets/images/hospitals/03/s2.jpg",
                "/assets/images/hospitals/03/s3.jpg",
                "/assets/images/hospitals/03/s4.jpg"
            ],
            status : 1, // 1:approved 0:pending
            regdate : "2018/04/23 11:56:22"
          },
          {
            id : 4,
            name : "Kent hospital",
            desc : "International business director of Kent Hospital visited Nigeria this week to intimate discussions for potential partnerships. Kent Hospital is owned majorly by leading buyout investor Mid Europa.",
            smallImage : "/assets/images/hospitals/thumnails/02.png",
            type : 4,
            reviewCount : 158,
            rate : 380, // = sum(each blog rate) / blog(review) count
            eachRate : {
                facility_ambiance : 50,// = sum(each blog facility_ambiance rate) / blog(review) count
                professionalism : 90,// = sum(each blog professionalism  rate) / blog(review) count
                time_efficiency : 60, // = sum(each blog tat_turn_around_time rate) / blog(review) count
                customer_service : 80,// = sum(each blog customer_service rate) / blog(review) count
                over_all_experience : 100// = sum(each blog over_all_experience rate) / blog(review) count
            },

            location : "Warwick Rhode Nigeria",
            longitude : 7.491302,
            latitude : 9.072264,
            url : "http://www.google.com",
            tel : "86-865-7536-2389",
            bigImage : "/assets/images/hospitals/04/main.jpg",
            thumbs : [
                "/assets/images/hospitals/04/s1.jpg",
                "/assets/images/hospitals/04/s2.jpg",
                "/assets/images/hospitals/04/s3.jpg",
                "/assets/images/hospitals/04/s4.jpg"
            ],
            status : 1, // 1:approved 0:pending
            regdate : "2018/05/03 13:26:17"
          },
          {
            id : 5,
            name : "Sir Yahaya Memorial Hospital",
            desc : "The first indigenous medical doctor was Dr Lodi and the charge nurse was mallam Aliyu Lemu while the maternity unit was manned by two European nursing sisters.",
            smallImage : "/assets/images/hospitals/thumnails/05.png",
            type : 6,
            reviewCount : 14,
            rate : 256, // = sum(each blog rate) / blog(review) count
            eachRate : {
                facility_ambiance : 40,// = sum(each blog facility_ambiance rate) / blog(review) count
                professionalism : 20,// = sum(each blog professionalism  rate) / blog(review) count
                time_efficiency : 100, // = sum(each blog tat_turn_around_time rate) / blog(review) count
                customer_service : 70,// = sum(each blog customer_service rate) / blog(review) count
                over_all_experience : 26// = sum(each blog over_all_experience rate) / blog(review) count
            },
            location : " Birnin Kebbi Nigeria ",
            longitude : 7.491302,
            latitude : 9.072264,
            url : "http://www.google.com",
            tel : "01-235-2674-3498",
            bigImage : "/assets/images/hospitals/05/main.jpg",
            thumbs : [
                "/assets/images/hospitals/05/s1.jpg",
                "/assets/images/hospitals/05/s2.jpg",
                "/assets/images/hospitals/05/s3.jpg",
                "/assets/images/hospitals/05/s4.jpg"
            ],
            status : 0, // 1:approved 0:pending
            regdate : "2018/05/24 03:24:22"
          }
    ],
    tempBlogList : [
        {
            id : 1,
            specialId : 1,
            specialImage : "/assets/images/hospitals/thumnails/01.png",
            specialName : "Karu Customs Hospital",
            specialLocation : "Abuja Karu Nigeria",

            userId : 1,
            userImage : "assets/images/avatar.png",
            userName : "kristalynn94",
            userLocation : "New Haven, Kentucky",
            title : "Fabulous!!",
            content : "This was the best vacation experience I have ever had! We were so sad it had to come to an end but cannot wait to return here or possibly try another Secrets resort! Highly recommend. Great food, lots of variety! Fun activities and entertainment daily. Would recommend all day every day! ",
            rate : 500,
            type : 1,
            eachRate : {
                facility_ambiance : 100,
                professionalism : 100,
                time_efficiency : 100, 
                customer_service : 100,
                over_all_experience : 100
            },
            screenImage : [
                "assets/images/noimage.png", 
                "assets/images/noimage.png", 
                "assets/images/noimage.png", 
                "assets/images/noimage.png"
            ],
            regdate : "2018/05/21 11:45:23"
        },
        {
            id : 2,
            specialId : 2,
            specialImage : "/assets/images/hospitals/thumnails/04.png",
            specialName : "IBOM SPECIALIST HOSPITAL",
            specialLocation : "Akwa Ibom Nigeria",

            userId : 2,
            userImage : "assets/images/avatar.png",
            userName : "Hoslow Abe89",
            userLocation : "New Haven, Kentucky",
            title : "Fabulous!!",
            content : "This was the best vacation experience I have ever had! We were so sad it had to come to an end but cannot wait to return here or possibly try another Secrets resort! Highly recommend. Great food, lots of variety! Fun activities and entertainment daily. Would recommend all day every day! ",
            rate : 500,
            type : 1,
            eachRate : {
                facility_ambiance : 100,
                professionalism : 100,
                time_efficiency : 100, 
                customer_service : 100,
                over_all_experience : 100
            },
            screenImage : [
                "assets/images/noimage.png", 
                "assets/images/noimage.png", 
                "assets/images/noimage.png", 
                "assets/images/noimage.png"
            ],
            regdate : "2018/05/20 10:37:16"
        },
        {
            id : 3,
            specialId : 2,
            specialImage : "/assets/images/hospitals/thumnails/04.png",
            specialName : "IBOM SPECIALIST HOSPITAL",
            specialLocation : "Akwa Ibom Nigeria",

            userId : 3,
            userImage : "assets/images/avatar.png",
            userName : "Hokion Skala",
            userLocation : "New Haven, Kentucky",
            title : "Fabulous!!",
            content : "This was the best vacation experience I have ever had! We were so sad it had to come to an end but cannot wait to return here or possibly try another Secrets resort! Highly recommend. Great food, lots of variety! Fun activities and entertainment daily. Would recommend all day every day! ",
            rate : 500,
            type : 1,
            eachRate : {
                facility_ambiance : 100,
                professionalism : 100,
                time_efficiency : 100, 
                customer_service : 100,
                over_all_experience : 100
            },
            screenImage : [
                "assets/images/noimage.png", 
                "assets/images/noimage.png", 
                "assets/images/noimage.png", 
                "assets/images/noimage.png"
            ],
            regdate : "2018/05/17 11:32:53"
        },
        {
            id : 4,
            specialId : 3,
            specialImage : "/assets/images/hospitals/thumnails/03.png",
            specialName : "Nigerian Turkish Nizamiye Hospital",
            specialLocation : "Abuja Turkish Nizamiye Nigeriaa",

            userId : 4,
            userImage : "assets/images/avatar.png",
            userName : "Yousoki Humua",
            userLocation : "New Haven, Kentucky",
            title : "Fabulous!!",
            content : "This was the best vacation experience I have ever had! We were so sad it had to come to an end but cannot wait to return here or possibly try another Secrets resort! Highly recommend. Great food, lots of variety! Fun activities and entertainment daily. Would recommend all day every day! ",
            rate : 500,
            type : 1,
            eachRate : {
                facility_ambiance : 100,
                professionalism : 100,
                time_efficiency : 100, 
                customer_service : 100,
                over_all_experience : 100
            },
            screenImage : [
                "assets/images/noimage.png", 
                "assets/images/noimage.png", 
                "assets/images/noimage.png", 
                "assets/images/noimage.png"
            ],
            regdate : "2018/05/14 16:34:28"
        }
    ],
    tempUserList : [
        {
            id : 1,
            image : "assets/images/avatar.png",
            name : "Steven Jim89",
            email : "gowins235@gmail.com",
            location : "New Haven, Kentucky",
            state : "Abia",
            city : "Bende",
            reviewCount : 100,
            regdate : "2018/05/14 16:34:28"
        },
        {
            id : 2,
            image : "assets/images/avatar.png",
            name : "Hoslow Abe89",
            email : "yousigo@outlook.com",
            location : "New Haven, Kentucky",
            state : "Adamawa",
            city : "Demsa",
            reviewCount : 150,
            regdate : "2018/04/23 08:25:12"
        },
        {
            id : 3,
            image : "assets/images/avatar.png",
            name : "Hokion Skala",
            email : "whsoesklar153@yahoo.com",
            location : "New Haven, Kentucky",
            state : "Anambra",
            city : "Aguata",
            reviewCount : 200,
            regdate : "2018/05/16 13:36:27"
        },
        {
            id : 4,
            image : "assets/images/avatar.png",
            name : "Yousoki Humua",
            email : "huraimax29@hotmail.com",
            location : "New Haven, Kentucky",
            state : "Taraba",
            city : "Ardo Kola",
            reviewCount : 130,
            regdate : "2018/04/23 08:25:12"
        },
    ],
    tempActivityList : [
        {
            id : 1,
            type : 5, //1:login, 2:reg, 3:update profile, 4:logout, 5:rating blog
            value1 : 1,//when type is 5, blog id
            value2 : "Fabulous!!",//when type is 5, blog name
            regdate : "2018/04/23 04:23:19",
            
            userId : 1,
            userImage : "assets/images/avatar.png",
            userName : "Steven Jim89"
        },
        {
            id : 2,
            type : 2, //1:login, 2:reg, 3:update profile, 4:logout, 5:rating blog
            value1 : 0,//when type is 5, blog id
            value2 : "",//when type is 5, blog name
            regdate : "2018/04/23 08:25:12",
            
            userId : 2,
            userImage : "assets/images/avatar.png",
            userName : "Hoslow Abe89"
        },
        {
            id : 3,
            type : 1, //1:login, 2:reg, 3:update profile, 4:logout, 5:rating blog
            value1 : 0,//when type is 5, blog id
            value2 : "",//when type is 5, blog name
            regdate : "2018/05/22 11:14:45",
            
            userId : 3,
            userImage : "assets/images/avatar.png",
            userName : "Hokion Skala"
        },
        {
            id : 4,
            type : 3, //1:login, 2:reg, 3:update profile, 4:logout, 5:rating blog
            value1 : 0,//when type is 5, blog id
            value2 : "",//when type is 5, blog name
            regdate : "2018/05/35 09:23:14",
            
            userId : 4,
            userImage : "assets/images/avatar.png",
            userName : "Yousoki Humua"
        }
    ]
}