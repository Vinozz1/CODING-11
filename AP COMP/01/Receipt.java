// public class Receipt {
//     public static void main(String[] args) {
//         // Calculate total owed, assuming 8% tax / 15% tip
//         System.out.println("Subtotal: ");
//         System.out.println(38 + 40 + 30);
//         System.out.println("Tax:");
//         System.out.println((38 + 40 + 30) * .08);
//         System.out.println(("Tip:"));
//         System.out.println((38 + 40 + 30) * .15);
//         System.out.println("Total");
//         System.out.println(38 + 40 + 30 +
//                             (38 + 40 + 30) * .08 +
//                             (38 + 40 + 30) * .15);          
//     }
// }



public class Receipt {
    public static void main(String[] args) {
        // Calculate total owed, assuming 8% tax / 15% tip
        int number1 = 38, number3 = 30, number2 = 40;

        int sum = number1 + number2 + number3;

        double tax = sum * .08;

        double tip = sum * .15;

        double total = sum + tax + tip;

        System.out.println("The total is:");
        System.out.println( + sum);
        System.out.println("The tax is:");
        System.out.println(+ tax);
        System.out.println("The tip is:");
        System.out.println( + tip);
        System.out.println("The total after tax n tip is:");
        System.out.println( + total);
    }
}

