#include <iostream>
using namespace std;

class T1 {
private:
int fnumber;
char Destination[100];
float Distance,Fuel;    
void calFuel();
public:

void SCHEDULE(){
     cout << "Destination:";
       gets(Destination);
    cout << "Flight number:";
       cin >> fnumber;
        cout << "Distance:";
       cin >> Distance;
       
       calFuel();
}
void DISPTEST(){
 cout << "Flight number: " << fnumber << endl;
        cout << "Destination: " << Destination << endl;
        cout << "Distance: " << Distance << endl;
        cout << "fule: " << Fuel << endl;

}
};void T1 :: calFuel(){
    if (Distance<=1000){
        Fuel=500;
    }else if (Distance>=1000 && Distance<=2000)
    {
        Fuel=1100;
    }else if(Distance>=2000){
        Fuel=2200;
    }
};
int main() {
    T1 b1;
    b1.SCHEDULE();
    b1.DISPTEST();

    return 0;
}