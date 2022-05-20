import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./components/view/Home/Home";
import "./styles/main.css";
import "./styles/responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CusmatLayout from "./components/layout/CusmatLayout";
import AboutUs from "./components/view/AboutUs/AboutUs";
import UseCases from "./components/view/UseCases/UseCases";
import CaseStudies from "./components/view/CaseStudies/CaseStudies";
import Mining from "./components/view/UseCases/Mining";
import DumperSimulator from "./components/view/UseCases/DumperSimulator";
import WinderSimulator from "./components/view/UseCases/WinderSimulator";
import ExcavatorSimulator from "./components/view/UseCases/ExcavatorSimulator";
import MaintanceSafety from "./components/view/UseCases/MaintanceSafety";
import ExpressLogistics from "./components/view/CaseStudies/ExpressLogistics";
import PharmaManufacturing from "./components/view/CaseStudies/PharmaManufacturing";
import OpenCastMining from "./components/view/CaseStudies/OpenCastMining";
import RequestDemo from "./components/view/RequestDemo/RequestDemo";
import Career from "./components/view/Career/Career";
import LogisticsAndWarehousing from "./components/view/UseCases/LogisticsAndWarehousing";
import Manufacturing from "./components/view/UseCases/Manufacturing";
import Healthcare from "./components/view/UseCases/Healthcare";
import Pharma from "./components/view/UseCases/Pharma";
import ForkliftSimulator from "./components/view/UseCases/ForkliftSimulator";
import ReachTruckSimulator from "./components/view/UseCases/ReachTruckSimulator";
import LastMileDelivery from "./components/view/UseCases/LastMileDelivery";
import BrazingAndWelding from "./components/view/UseCases/BrazingAndWelding";
import MedicalEquipmentGuide from "./components/view/UseCases/MedicalEquipmentGuide";
import VaccumPumpMaintenance from "./components/view/UseCases/VaccumPumpMaintenance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CusmatLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="use-cases">
            <Route index element={<UseCases />} />
            <Route path="mining">
              <Route index element={<Mining />} />
              <Route path="dumper-simulator" element={<DumperSimulator />} />
              <Route path="winder-simulator" element={<WinderSimulator />} />
              <Route path="excavator-simulator" element={<ExcavatorSimulator />} />
              <Route path="maintenance-safety" element={<MaintanceSafety />} />
            </Route>
            <Route path="logisticsandwarehousing">
              <Route index element={<LogisticsAndWarehousing />} />
              <Route path="forklift-simulator" element={<ForkliftSimulator />} />
              <Route path="reach-truck-simulator" element={<ReachTruckSimulator />} />
              <Route path="last-mile-delivery" element={<LastMileDelivery />} />
            </Route>
            <Route path="manufacturing">
              <Route index element={<Manufacturing />} />
              <Route path="brazing-and-welding" element={<BrazingAndWelding />} />
            </Route>
            <Route path="healthcare">
              <Route index element={<Healthcare />} />
              <Route path="medical-equipment-guide" element={<MedicalEquipmentGuide />} />
            </Route>
            <Route path="pharma" >
              <Route index element={<Pharma />} />
              <Route path="vaccum-pump-maintenance" element={<VaccumPumpMaintenance />} />
            </Route>
          </Route>
          <Route path="case-studies">
            <Route index element={<CaseStudies />} />
            <Route path="express-logistics" element={<ExpressLogistics />} />
            <Route
              path="pharma-manufacturing"
              element={<PharmaManufacturing />}
            />
            <Route path="open-cast-mining" element={<OpenCastMining />} />
          </Route>
          <Route path="request-demo" element={<RequestDemo />} />
          <Route path="career" element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
