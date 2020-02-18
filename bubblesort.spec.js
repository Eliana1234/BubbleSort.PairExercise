describe('Bubble Sort Swap', () => {

  beforeAll(function () {
        spyOn(window, 'swap').and.callThrough(); 
    })

 describe('Bubble Sort', function(){

     const arr = [3, 4, 1, 2]

     it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single element', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('it handles multiple elements', function(){
    expect( bubbleSort(arr) ).toEqual( [1, 2, 3, 4] );
  });

  it('swap should not exceed array length', function () {
    bubbleSort(arr);
    expect(swap.calls.count()).toEqual(arr.length);
  });

});



})
  