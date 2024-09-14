#include <iostream>
using namespace std;
class hotel
{

public:
     int p[50], d, choice, a[25], b[25], z = 0, qty, total, gst, net_total, tot = 0;
     string i[1000], name, number;
     hotel()
     {
          i[0] = "Manchurian     ";
          i[1] = "veg-65         ";
          i[2] = "Garlic-ball    ";
          i[3] = "Chaines-Bhel   ";
          i[4] = "Panir-Tika     ";
          i[5] = "Dosa           ";
          i[6] = "Maisur         ";
          i[7] = "Gotalo         ";
          i[8] = "Mendu-Vada     ";
          i[9] = "Idli           ";
          i[10] = "7-chesee      ";
          i[11] = "Mix-Veg       ";
          i[12] = "Margrita      ";
          i[13] = "Paneer-Tanduri";
          i[14] = "Onion-Pizza   ";
          i[15] = "Kaju-Carry    ";
          i[16] = "Paneer-Masala ";
          i[17] = "Paneer-Tanduri";
          i[18] = "Veg-Paneer    ";
          i[19] = "Aloo-Gobhi    ";
          i[20] = "Mazza         ";
          i[21] = "Cock          ";
          i[22] = "Sprit         ";
          i[23] = "Butter-Milk   ";
          i[24] = "Thumsup       ";
          i[25] = "Sosyo         ";

          p[0] = 150;
          p[1] = 120;
          p[2] = 150;
          p[3] = 160;
          p[4] = 140;
          p[5] = 50;
          p[6] = 150;
          p[7] = 250;
          p[8] = 100;
          p[9] = 100;
          p[10] = 200;
          p[11] = 250;
          p[12] = 240;
          p[13] = 250;
          p[14] = 230;
          p[15] = 180;
          p[16] = 200;
          p[17] = 200;
          p[18] = 220;
          p[19] = 200;
          p[20] = 25;
          p[21] = 25;
          p[22] = 25;
          p[23] = 25;
          p[24] = 25;
          p[25] = 25;
     }
     void show_menu()
     {
          cout << "-------------------------------------" << endl;
          cout << "|     bhojan bhandar restaurant     |" << endl;
          cout << "-------------------------------------" << endl;
          cout << "--------------|CHINESE|--------------" << endl;
          cout << "no.           item              price" << endl;
          cout << "01          Manchurian           150 " << endl;
          cout << "02          Veg-65               120 " << endl;
          cout << "03          Garlic-ball          160 " << endl;
          cout << "04          Chaines-Bhel         140 " << endl;
          cout << "05          Panir-Tika            50 " << endl;

          cout << "-----------|SOUTH INDIAN |-----------" << endl;
          cout << "no.           item              price" << endl;
          cout << "06          Dosa                 150 " << endl;
          cout << "07          Maisur               250 " << endl;
          cout << "08          Gotalo               100 " << endl;
          cout << "09          Mendu-Vada           100 " << endl;
          cout << "10          Idli                 200 " << endl;

          cout << "--------------|PIZZA'S|--------------" << endl;
          cout << "no.           item              price" << endl;
          cout << "11          '7-chesee            250 " << endl;
          cout << "12          Mix-Veg              230 " << endl;
          cout << "13          Margrita             180 " << endl;
          cout << "14          Paneer Tanduri       200 " << endl;
          cout << "15          'Onion Pizza         200 " << endl;

          cout << "--------------|PUNJABI|--------------" << endl;
          cout << "no.           item              price" << endl;
          cout << "16          Kaju Carry           220 " << endl;
          cout << "17          Paneer Masala        200 " << endl;
          cout << "18          Paneer Tanduri       250 " << endl;
          cout << "19          Veg Paneer           150 " << endl;
          cout << "20          Aloo Gobhi           150 " << endl;

          cout << "--------------|DRINKS |--------------" << endl;
          cout << "no.          item              price" << endl;
          cout << "21          Mazza                 25 " << endl;
          cout << "22          Cock                  25 " << endl;
          cout << "23          Sprit                 25 " << endl;
          cout << "24          Butter-Milk           25 " << endl;
          cout << "25          Thumsup               25 " << endl;
     }
     void data()
     {

          cout << "================ Customer Details ================" << endl;

          cout << "Enter Customer Name:";
          cin >> name;

     again:

          cout << "|   Enter Customer Mobile Number[10 digit only]   |:";
          cin >> number;

          d = 0;
          d = number.size();

          if (d == 10)
          {
               cout << endl;
          }
          else
          {
               cout << "|   Please enter valid number   |" << endl;
               goto again;
          }
     }
     void order()
     {

          cout << "|   Enter your choice   |: ";
          cin >> choice;
          if (choice <= 0 || choice >=25)
          {
               cout << "| Please enter valid number   |"<<endl;
          }
          else
          {

               a[z] = choice;
               cout << "|   Enter quantity   |:";
               cin >> qty;

               b[z] = qty;
               z++;
               cout << endl;
          }
     }
     void bill()
     {
          z--;
          int n, f = 0, t = 0;
          cout << "-----------------------------------------------------------------------" << endl;
          cout << "|                      Bhojan Bhandar Restaurant                      |" << endl;
          cout << "-----------------------------------------------------------------------" << endl;
          cout << __DATE__<<endl;
          cout << __TIME__<<endl;
          cout << "|   NAME   |:" << name << endl;
          cout << "|   NUMBER   |:" << number << endl;
          cout << "-----------------------------------------------------------------------" << endl;
          cout << "-----------------------------------------------------------------------" << endl;
          cout << "NO.\tITEM\t\t\tQTY\t\tPRICE\t\tTOTAL\t\t" << endl;
          for (int j = 0; j <= z; j++)
          {

               n = a[j];

               f = b[j];
               n--;

               total = p[n] * f;

               cout << j + 1 << "\t";

               cout << i[n] << "\t\t" << f << "\t\t" << p[n] << "\t\t" << total << endl;
               t = f * p[n];

               tot = tot + t;
               gst = (tot *18)/100;
               net_total = tot + gst;
          }

          cout << "-----------------------------------------------------------------------" << endl;
          cout << "|total bill:                                                    " << tot << endl;
          cout << "|gst:                                                           " << gst << endl;
          cout << "-----------------------------------------------------------------------" << endl;
          cout << "|after gst add bill:                                            " << net_total << endl;
          cout << "-----------------------------------------------------------------------" << endl;
     }
};
int main()
{
     hotel s1;
     s1.data();
     int ac;

     do
     {
          {
               cout << "------------------------------------------------------" << endl;
               cout << "|             Bhojan Bhandar Restaurant               |" << endl;
               cout << "------------------------------------------------------" << endl;
               cout << "|   Welcome enter your choose Your Option:            |" << endl;
               cout << "|   enter 1 for  menu                                 |" << endl;
               cout << "|   enter 2 for  food order                           |" << endl;
               cout << "|   enter 3 for  bill                                 |" << endl;
               cout << "|   enter 0 for  Exit                                 |" << endl;
               cout << "------------------------------------------------------ " << endl;

               cout << "|   Enter Your choice   |: ";
               cin >> ac;

               switch (ac)
               {
               case 1:
                    s1.show_menu();
                    break;
               case 2:
                    s1.order();
                    break;
               case 3:
                    s1.bill();
                    break;
               case 0:
                    cout << "--------------------------------" << endl;
                    cout << "|     Thank you for visit      |" << endl;
                    cout << "--------------------------------" << endl;
                    return 0;
               default:
                    cout << "|   enter valid number   |" << endl;
               }
          }
     } while (ac != 0);

     return 0;
}
