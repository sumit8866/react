#include <iostream>
using namespace std;

class T1 {
private:
int TestCode,NoCandidate,CenterReqd;
char Description[100];
void calcntr();
public:

void SCHEDULE(){
     cout << "Description:";
       gets(Description);
    cout << "TestCode:";
       cin >> TestCode;
        cout << "NoCandidate:";
       cin >> NoCandidate;
       
       calcntr();
}
void DISPTEST(){
 cout << "test code: " << TestCode << endl;
        cout << "description: " << Description << endl;
        cout << "No ofCandidate: " << NoCandidate << endl;
        cout << "Center: " << CenterReqd << endl;

}
};void T1 :: calcntr(){
    CenterReqd=(NoCandidate/100+1);
};
int main() {
    T1 b1;
    b1.SCHEDULE();
    b1.DISPTEST();

    return 0;
}