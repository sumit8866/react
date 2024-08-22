#include<iostream>
using namespace std;
int main()
{
    int n;
    cout << "enter n number";
    cin >> n;
 
 for (int i=1;i<=n;i++){
    for (int a=n;a>=i;a--){
        cout << " ";
    }
    for (int j=1;j<=i;j++){
        cout <<"* ";
    }cout <<endl;
 }
 for (int i=2;i<=n;i++){
    for (int a=i;a>=1;a--){
        cout << " ";
    }
    for (int j=i;j<=n;j++){
        cout <<"* ";
    }cout <<endl;
 }

}