import { TestBed } from '@angular/core/testing';

import { SmxAutoscrollService } from './smx-autoscroll.service';

describe('SmxAutoscrollService', () => {
  let service: SmxAutoscrollService;
  let dummyData;
  let dummyElementsCount;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[SmxAutoscrollService]
    });
    service = TestBed.inject(SmxAutoscrollService);
    dummyData = document.querySelectorAll('div');
    dummyElementsCount = dummyData.length;
    service["_scrollableElements"]=dummyData;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.scroll).toBeDefined();
    expect(service.enableAutoscroll).toBeDefined();
    expect(service.observeScroll).toBeDefined();
    expect(service.unobserveScroll).toBeDefined();
    expect(service.updateIndexInbound).toBeDefined();
    expect(service['IObserverListener']).toBeDefined();
    expect(service["_currentElementIdx"]).toBeDefined();
  });
  
  it('check defaults', () => {
    expect(service.enableAutoscroll).toBeTruthy();
    expect(service["_currentElementIdx"]).toEqual(-1);

  });
  
  it('disable autoscroll ', () => {
    service.enableAutoscroll = false;
    expect(service.enableAutoscroll).toBeFalsy();
  });
  it("updateIndexInbound() should return index in range",()=> {
    const updateCurrEleIdx = spyOn(service,"updateIndexInbound").and.callThrough();
  
    let idx = service.updateIndexInbound(1);
    expect(updateCurrEleIdx).toHaveBeenCalled();
    expect(idx).toEqual(0);
    
    idx = service.updateIndexInbound(dummyElementsCount+1);
    expect(idx).toEqual(dummyElementsCount-1);
    
    idx = service.updateIndexInbound(-(dummyElementsCount+1));
    expect(idx).toEqual(0);

    service["_scrollableElements"]=[];
    idx = service.updateIndexInbound(1);
    expect(idx).toEqual(-1);
  })

  it('obserscroll should start observing elements array', () => {
    let obserscrollFnSpy = spyOn(service,"observeScroll").and.callThrough();
    service.observeScroll(dummyData);
    expect(obserscrollFnSpy).toHaveBeenCalledWith(dummyData);

  });
  it('unobserveScroll should disconnect from observing scrolling', () => {
    let spyFn = spyOn(service,'unobserveScroll').and.callThrough();
    service["_iObserver"] = new IntersectionObserver(()=>{});
    service.unobserveScroll();
    expect(spyFn).toHaveBeenCalled();
  });

  it('scroll function should scroll to next element', () => {
      let scrollFnSpy = spyOn(service,'scroll').and.callThrough();
      service.scroll(dummyData[1],1);
      expect(scrollFnSpy).toHaveBeenCalled();      
  });

});
