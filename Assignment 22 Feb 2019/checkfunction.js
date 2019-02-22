
function check_datatype(valuetocheck) {
    if (valuetocheck === null) {
        console.log('Type : NULL')
        console.log('value: ' + valuetocheck)
    }
    else if (typeof valuetocheck === 'undefined') {
        console.log('Type:Undefined')
        console.log('value: ' + valuetocheck)
    }
    else if (typeof valuetocheck === 'string' || valuetocheck instanceof String) {
        console.log('Type:String')
        console.log('value: ' + valuetocheck)
    }
    else if (typeof valuetocheck === 'number' && isFinite(valuetocheck)) {
        console.log('Type:Number')
        console.log('value: ' + valuetocheck)
    }
    else if(valuetocheck && typeof valuetocheck === 'object' && valuetocheck.constructor === Object) {
        console.log('Type:Object')
        let key=Object.keys(valuetocheck);
        let val=Object.values(valuetocheck);
        key.map((x,i)=>{
            console.log(x+":"+val[i]);
        })
       
      }
    else if(valuetocheck && typeof valuetocheck === 'object' && typeof valuetocheck[0] != 'object' && valuetocheck.constructor === Array) {
        console.log('Type:Array')
        valuetocheck.map((x,i)=>{
             console.log(x);
         })
      }
    else if(valuetocheck && typeof valuetocheck === 'object' && typeof valuetocheck[0] === 'object' && valuetocheck.constructor === Array) {
        console.log('Type:Array of Object')
        valuetocheck.map((x,i)=>{
          console.log(x);
      })
       
      }
    else if (isNaN(valuetocheck) == true) {
        console.log("Type:NaN");
    }
   
      else if(valuetocheck && typeof valuetocheck === 'boolean') {
        console.log('Type : Boolean')
        console.log('value:',valuetocheck)
      }
}

check_datatype({"a": 2,"f": 5, "c": 10})

check_datatype(true)

check_datatype(null)

check_datatype()

check_datatype("Vaibhav")

check_datatype(19)

check_datatype([1,2,3,4])

check_datatype([{a:1},{b:2}])

check_datatype(0/0)
