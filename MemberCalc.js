function MemberCalc(cost,friends){

    if (friends >= 0){
        total = cost;

    }
    else if (friends =1){
        discount = cost*.05;
        total = cost - discount;

    }
    else if (friends =2){
        discount = cost*.10;
        total = cost - discount;

    }
    else if (friends <= 3){
        discount = cost*.15;
        total = cost - discount;

    }
    else total = cost;

    return total;
}


export {MemberCalc}