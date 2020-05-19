import Axios from "axios";

class DispatchService {
  dispatch = async (method, url, data) => {
    let response = null;

    await Axios({ method, url, data })
      .then(r => (response = r.data))
      .catch(e => console.error(e.toString()));

    return response;
  };
}

export default DispatchService;
