import http from '../http/http-common';

class MessageDataService {
  create(data) {
    return http.post('/', data);
  }
}

export default new MessageDataService();
