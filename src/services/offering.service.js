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
}

export default OfferingService;
