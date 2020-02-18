describe('Bubble Sort', function(){

     it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single element', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('it handles multiple elements', function(){
    expect( bubbleSort([1,3,2]) ).toEqual( [1,2,3] );
  });


})
  