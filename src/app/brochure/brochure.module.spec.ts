import { BrochureModule } from './brochure.module';

describe('BrochureModule', () => {
  let brochureModule: BrochureModule;

  beforeEach(() => {
    brochureModule = new BrochureModule();
  });

  it('should create an instance', () => {
    expect(brochureModule).toBeTruthy();
  });
});
