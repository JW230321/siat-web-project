import axios from "axios";

const NOTICE_API_BASE_URL = "http://localhost:8088/api/";

function noticeList(){
  return axios.get(NOTICE_API_BASE_URL + "noticeList");
}

function insertNotice(notice){
  return axios.post(NOTICE_API_BASE_URL + "insertNotice", notice);
}

function detailNotice(notice_id){
  return axios.get(NOTICE_API_BASE_URL + "detailNotice/" + notice_id)
}

function modifyNotice(notice_id, notice){
  return axios.post(NOTICE_API_BASE_URL + "modifyNotice/" + notice_id, notice)
}

function deleteNotice(notice_id){
  return axios.delete(NOTICE_API_BASE_URL + "noticeList/" + notice_id);
}




const NoticeService = {
  noticeList,
  insertNotice,
  detailNotice,
  modifyNotice,
  deleteNotice
};

export default NoticeService;

