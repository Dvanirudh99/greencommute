import { BaseHands, BaseEyes, BaseDependencies } from "../BaseRobot";

export class Dependencies extends BaseDependencies {
  visitGreenCommute() {
    this.accessUrl("http://3.14.13.106:3000/");
  }
}

export class RobotEyes extends BaseEyes {}

export class RobotHands extends BaseHands {}
