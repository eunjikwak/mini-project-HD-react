
import axios from "axios";

const HD_DOMAIN =  "http://localhost:8111";
const AxiosApi = {
    // 로그인
    memberLogin: async(id, pw) => {
        const login = {
            id : id,
            pwd : pw 
        };
        return await axios.post(HD_DOMAIN + "/login", login);
    },
    //회원 조회
    memberGet: async(id) => {
        
        return await axios.get(HD_DOMAIN + `/member?name=${id}`);
    },

    // 회원 가입
    memberReg: async(id, pwd, name, mail) => {
        const member = {
            id: id, 
            pwd: pwd,
            name: name,
            mail: mail
        };
        return await axios.post(HD_DOMAIN + "/new", member);
    },
    // 회원 가입 여부 확인
    memberRegCheck: async(id) => {
        const check = {
            id: id
        };
        return await axios.post(HD_DOMAIN + "/check", check);
    },

    // 회원 탈퇴
    memberDel: async(id) => {
        const del = {
            id: id
        };
        return await axios.post(HD_DOMAIN + "/delete", del);
    },

    //회원 업데이트 
    memberUpdate : async(data) => {
        const member ={
            vo : data
        }
        return await axios.post(HD_DOMAIN+"/update",member);
    }

};
export default AxiosApi;