import type { RootStore } from "../store/RootStore";
import { CompanyController } from "./CompanyController";

export class RootController {
  readonly companyController: CompanyController;

  constructor(rootStore: RootStore) {
    this.companyController = new CompanyController(rootStore);
  }

  loadAppData() {
    this.companyController.loadCompanies();
  }
}
