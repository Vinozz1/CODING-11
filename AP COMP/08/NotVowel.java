import java.util.Scanner;

public class NotVowel {

    public static void main(String[] args)
    {
        // Scanner console = new Scanner(System.in);
        // System.out.print("Enter a char: ");
        // String aChar = console.next();

        // System.out.println(isVowel(aChar));
        System.out.println(notVowel("a"));
        System.out.println(notVowel("z"));
    }


    public static boolean notVowel(String s) {
        return !s.equals("a") && !s.equals("e") &&
               !s.equals("i") && !s.equals("o") &&
               !s.equals("u");
        // return false;
    }
}