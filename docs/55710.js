"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55710],{55710:n=>{n.exports=JSON.parse('{"topicId":4929,"forumId":24,"topicTitle":"Admin Canidate java program","topicTime":1321745342,"topicViews":34,"topicReplies":3,"topicStatus":0,"topicFirstPosterName":"NBLCKK","topicFirstPosterColor":"","topicLastPosterName":"NBLCKK","topicLastPosterColor":"","topicLastPostTime":1321753630,"posts":[{"postId":38106,"topicId":4929,"posterId":517,"postTime":1321745342,"postText":"This is one of my first programs.  /**\\n * @(#)Adminapp.java\\n *\\n * Admin application\\n *Determine if user is a potential canidate for a nnjg admin.\\n * Aaron Ivy\\n * @version 1.00 2011/11/19\\n */\\n\\n import java.util.Scanner;\\n\\npublic class Adminapp {\\n\\n    public static void main(String[] args) {\\n\\n    \\tScanner reader = new Scanner(System.in);\\n\\n    \\tint forumposts;\\n    \\tint timeonservers;\\n    \\tint mic;\\n    \\tString username;\\n    \\tint hateclub;\\n\\n    \\tSystem.out.println (\\" Please use 1 for yes and 0 for no, please use underscores for spaces \\");\\n\\n    \\tSystem.out.print (\\" Please enter your username \\");\\n    \\tusername = reader.next();\\n\\n    \\tSystem.out.print (\\" How many forum posts do you have? \\");\\n    \\tforumposts = reader.nextInt();\\n\\n    \\tSystem.out.print (\\" On average how many hours do you spend on nnjg servers weekly? \\");\\n    \\ttimeonservers = reader.nextInt();\\n\\n    \\tSystem.out.print (\\" Do you possess and use a good microphone? \\");\\n    \\tmic = reader.nextInt();\\n\\n    \\tSystem.out.print (\\" Do you belong to a hate group involving NNJG? \\");\\n    \\thateclub = reader.nextInt();\\n\\n    \\tif ( forumposts >=100 && timeonservers >= 10 && mic == 1 && hateclub == 0)\\n    \\t\\tSystem.out.println (username + \\" \\" + \\"You have a good chance of becoming an admin\\");\\n    \\t\\t\\telse\\n    \\t\\t\\t\\tSystem.out.println (\\"you Have no chance of becoming an admin\\");\\n    }\\n}\\n "},{"postId":38113,"topicId":4929,"posterId":612,"postTime":1321749962,"postText":"System.out.print (\\" do you think gash will pick admins ever again? If so how many months will the apps be open? \\");\\n reader.nextint();"},{"postId":38114,"topicId":4929,"posterId":634,"postTime":1321750005,"postText":"I think you should refine your approach.\\n\\n\\nimport java.util.*;\\nif ( forumposts >=100 && timeonservers >= 10 && mic == 1 && hateclub == 0)\\n          System.out.println (username + \\" \\" + \\"You have a good chance of becoming an admin\\\\nLet\'s roll the dice to see if you actually get it.\\");\\nRandom generator1 = new Random( 6 );\\nif (generator1 == 1 || generator1 == 2)\\n          System.out.println (username + \\"Yay! you got mod!)\\n\\n\\nThat should add some accuracy.\\n\\n\\n\\nEDIT:  Who taught you to use \\nusername + \\" \\" + \\"You have a good chance of becoming an admin\\"\\ninstead of\\nusername + \\" You have a good chance of becoming an admin\\"?\\nit\'s a little redundant.\\n\\nAlso \\nSystem.out.print (\\" Do you possess and use a good microphone? \\");\\nI think Funnyraff would have something to say about this requirement. No pun intended."},{"postId":38126,"topicId":4929,"posterId":517,"postTime":1321753630,"postText":">> System.out.print (\\" do you think gash will pick admins ever again? If so how many months will the apps be open? \\");\\n  \\n*fixed"}]}')}}]);