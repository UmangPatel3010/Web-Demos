class CheckDemo {
    isPalindrome(n){
        let temp=n;
        let newnum = 0;
        while(temp>0){
            newnum=newnum*10 + (temp%10);
            temp =parseInt(temp/10);
        }
        if(newnum === n)
            return true;
        else 
            return false;
    }

    isPrime(n){
        if(n>2 && n%2==0)
            return false;
        for(let i=3; i<n/2; i=i+2){
            if(n%i == 0)
                return false;
        }
        return true;
    }
     
    isArmstrong(n){
        let temp = n;
        let digits = parseInt(Math.log10(n))+1;
        let num=0
        while(temp>0){
            num = num + Math.pow((temp%10),digits);
            temp =parseInt(temp/10);
        }
        if(n === num)
            return true;
        else
            return false;
    }
    primeInRange(s,e){
        let prm = []
        for(let i=s;i<=e;i++){
            let flag = true;
            for(let j=2; j<i/2+1; j++){
                if(i%j == 0){
                    flag = false;
                    break;
                }
            }
            if(flag)
                prm.push(i);
        }
        return prm;
    }

    GCD(a,b){
        if(a ==b)
            return a;
        else if(a >b)
            return this.GCD(a-b,b);
        else if(a<b)
            return this.GCD(a,b-a);
    }
}
module.exports = CheckDemo;