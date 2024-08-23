#include<iostream>
using namespace std;
int rate ,qty,amt,dis,bamt,gst,netbill;
void p1()
{


    cout << "enter rate";
    cin >> rate;
    cout << "enter qty";
    cin >> qty;
    
    amt=rate*qty;
	dis=amt*0.10;
	bamt=amt-dis;
	gst=bamt*0.18;
	netbill=bamt+gst;

   
}
void p2()
{
    p1();
     cout <<"rate  qty     amount   dis    billamt   gst18   netbill \n";
    cout << rate<<"\t"<< qty<<"\t"<< amt<<"\t"<< dis<<"\t"<< bamt<<"\t"<< gst<<"\t"<< netbill<<"\t";
}
int main()
{
    p2();
    return 0;
}
