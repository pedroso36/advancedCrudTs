import { container } from "tsyringe";

import { IDateProvider } from "./DaysjsProvider/IDateProvider";
import { DayjsDateProvider } from "./DaysjsProvider/implementations/DayjsDateProvider";

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
);
