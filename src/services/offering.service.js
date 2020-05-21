import DispatchService from "./dispatch.service";
import { METHOD, API } from "../config/api.config";

class OfferingService {
  ds = new DispatchService();

  save = async ({ name, title, subtext, description }) => {
    await this.ds.dispatch(METHOD.POST, API.OFFERING, {
      name,
      title,
      subtext,
      description
    });
  };

  fetch = async () => {
    return await this.ds.dispatch(METHOD.GET, API.OFFERING, null);
  };
}

export default OfferingService;
