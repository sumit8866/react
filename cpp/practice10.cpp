#include <iostream>
using namespace std;
int main ()
{
    int f=1,n;
    cout <<"enter n value:";
    cin >>n;
    for (int i=1;i<=n;i++){

        f *=i;
       

    }
     cout <<"fac is :"<<f;
    
}