import {
  RobotEyes,
  RobotHands,
  Dependencies,
} from "../robots/greencommute/Robot";

context("GreenCommute End to End Testing", () => {
  const robotEyes = new RobotEyes();
  const robotHands = new RobotHands();
  const dependencies = new Dependencies();

  beforeEach(() => {
    cy.viewport(1905, 980);
    robotHands.wait(2000);
  });

  describe("LandingForms Tests", () => {
    it("navigate to greencommute landing page", () => {
      dependencies.visitGreenCommute();
    });

    it("user location form loads successfully", () => {
      robotEyes.seesDomContainText(
        ".MuiTypography-h1",
        "More than 2000 people are using Green Commute"
      );
      robotEyes.seesDomContainText(
        '[data-testid="user-location-form"] > .MuiTypography-root',
        "Where do you stay?"
      );
      robotEyes.seesDomContainText(
        ".MuiGrid-grid-md-5 > .MuiTypography-root",
        "Enter Location to know Time Air Quality Index (AQI)"
      );
      robotHands.typeTextonDom("name", "userLocation", "Hyderabad");
      robotEyes.seesDomContainText(
        ".MuiTypography-h3",
        "Real Time Air Quality Index(AQI) in this location"
      );
      robotHands.wait(1000);
      robotHands.clickOnDomElement('[data-testid="nextBtn"]');
    });

    it("job locations form loads successfully", () => {
      robotEyes.seesDomContainText(
        '[data-testid="job-location-form"] > .MuiTypography-root',
        "Where do you want to work?"
      );
      robotHands.clickOnId("tags-filled");
      robotHands.typeTextonId("tags-filled", "hyderabad{enter}mumbai{enter}");
      robotHands.wait(1000);
      robotHands.clickOnDomElement('[data-testid="nextBtn"]');
    });

    it("user skills form loads successfully", () => {
      robotEyes.seesDomContainText(
        '[data-testid="skills-form"] > .MuiTypography-root',
        "What do you want to do?"
      );
      robotHands.typeTextonId(
        "tags-filled",
        "UI/UX Designer{enter}Graphic Designer{enter}"
      );
      robotHands.wait(2000);
      robotHands.clickOnDomElement('[data-testid="nextBtn"]');
      robotHands.wait(1000);
    });
  });

  describe("FindJobsPage Tests", () => {
    it("recommended job card click redirection", () => {
      robotEyes.seesDomContainText(
        '[data-testid="recommended"]',
        "Recommended for you"
      );
      robotHands.clickOnDomElement('[data-testid="recommended-card-link-1');
      robotEyes.seesDomContainText('[data-testid="job-list"]', "Job List");
    });

    it("searching jobcards", () => {
      cy.get(
        '.css-qwkzjq > .MuiBox-root > [data-testid="AutoComplete"] > .MuiFormControl-root > .MuiOutlinedInput-root > #combo-box-demo2'
      )
        .type("UI/UX Designer{enter}", { force: true })
        .scrollIntoView();
      robotHands.wait(2000);
      robotHands.clickOnDomElement('[data-testid="search-icon"]');
      robotHands.wait(2000);
    });

    it("filtering jobs", () => {
      robotHands.clickOnDomElement('[data-testid="filterbutton"]');
      robotHands.wait(1000);
      robotEyes.seesDomContainText(
        '[data-testid="11-20km-checkbox"] > .MuiFormGroup-root > .MuiFormControlLabel-root',
        "11-20km"
      );
      robotHands.clickOnDomElement(
        '[data-testid="11-20km-checkbox"] > .MuiFormGroup-root > .MuiFormControlLabel-root'
      );
      robotHands.wait(1000);
      robotHands.clickOnDomElement(
        '.MuiBox-root > [data-testid="button-apply"]'
      );
      robotHands.wait(1000);
    });
  });

  describe("SaveJobsPage Tests", () => {
    it("saved a job successfully", () => {
      robotHands.clickOnDomElement('[data-testid="button-apply"]');
      robotHands.wait(1000);
      robotEyes.seesDomContainText(
        '[data-testid="file-upload-success"]',
        "Hi Satish! Your Resume got Uploaded Successfully !"
      );
      robotHands.clickOnDomElement('[data-testid="okay-button"]');
      robotHands.wait(1000);
      robotHands.clickOnDomElement('[data-testid="button-save"]');
      robotHands.wait(1000);
    });
    it("unsaved a job successfully", () => {
      robotHands.clickOnDomElement('[data-testid="Saved Jobs"]');
      robotHands.wait(1000);
      robotHands.clickOnDomElement(
        '[data-testid="saved-card-link-1"] > [data-testid="job-card"]'
      );
      robotHands.wait(1000);
      robotHands.clickOnDomElement('[data-testid="button-save"]');
    });
  });
});
