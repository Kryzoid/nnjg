import hex2ascii from 'hex2ascii';
import strip from '../strip';

const forums = [];

/*
CREATE TABLE `phpbb_forums` (
  `forum_id` mediumint(8) unsigned NOT NULL auto_increment,
  `parent_id` mediumint(8) unsigned NOT NULL default '0',
  `left_id` mediumint(8) unsigned NOT NULL default '0',
  `right_id` mediumint(8) unsigned NOT NULL default '0',
  `forum_parents` mediumtext collate utf8_bin NOT NULL,
  `forum_name` varchar(255) collate utf8_bin NOT NULL default '',
  `forum_desc` text collate utf8_bin NOT NULL,
  `forum_desc_bitfield` varchar(255) collate utf8_bin NOT NULL default '',
  `forum_desc_options` int(11) unsigned NOT NULL default '7',
  `forum_desc_uid` varchar(8) collate utf8_bin NOT NULL default '',
  `forum_link` varchar(255) collate utf8_bin NOT NULL default '',
  `forum_password` varchar(40) collate utf8_bin NOT NULL default '',
  `forum_style` mediumint(8) unsigned NOT NULL default '0',
  `forum_image` varchar(255) collate utf8_bin NOT NULL default '',
  `forum_rules` text collate utf8_bin NOT NULL,
  `forum_rules_link` varchar(255) collate utf8_bin NOT NULL default '',
  `forum_rules_bitfield` varchar(255) collate utf8_bin NOT NULL default '',
  `forum_rules_options` int(11) unsigned NOT NULL default '7',
  `forum_rules_uid` varchar(8) collate utf8_bin NOT NULL default '',
  `forum_topics_per_page` tinyint(4) NOT NULL default '0',
  `forum_type` tinyint(4) NOT NULL default '0',
  `forum_status` tinyint(4) NOT NULL default '0',
  `forum_posts` mediumint(8) unsigned NOT NULL default '0',
  `forum_topics` mediumint(8) unsigned NOT NULL default '0',
  `forum_topics_real` mediumint(8) unsigned NOT NULL default '0',
  `forum_last_post_id` mediumint(8) unsigned NOT NULL default '0',
  `forum_last_poster_id` mediumint(8) unsigned NOT NULL default '0',
  `forum_last_post_subject` varchar(255) collate utf8_bin NOT NULL default '',
  `forum_last_post_time` int(11) unsigned NOT NULL default '0',
  `forum_last_poster_name` varchar(255) collate utf8_bin NOT NULL default '',
  `forum_last_poster_colour` varchar(6) collate utf8_bin NOT NULL default '',
  `forum_flags` tinyint(4) NOT NULL default '32',
  `forum_options` int(20) unsigned NOT NULL default '0',
  `display_subforum_list` tinyint(1) unsigned NOT NULL default '1',
  `display_on_index` tinyint(1) unsigned NOT NULL default '1',
  `enable_indexing` tinyint(1) unsigned NOT NULL default '1',
  `enable_icons` tinyint(1) unsigned NOT NULL default '1',
  `enable_prune` tinyint(1) unsigned NOT NULL default '0',
  `prune_next` int(11) unsigned NOT NULL default '0',
  `prune_days` mediumint(8) unsigned NOT NULL default '0',
  `prune_viewed` mediumint(8) unsigned NOT NULL default '0',
  `prune_freq` mediumint(8) unsigned NOT NULL default '0',
  PRIMARY KEY  (`forum_id`),
  KEY `left_right_id` (`left_id',`right_id`),
  KEY `forum_lastpost_id` (`forum_last_post_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=131 ;
*/
const addForum = (...args) => {
  const [
    forumId,
    parentId,
    leftId,
    rightId,
    forumParents,
    forumName,
    forumDesc,
    forumDescBitfield,
    forumDescOptions,
    forumDescUid,
    forumLink,
    forumPassword,
    forumStyle,
    forumImage,
    forumRules,
    forumRulesLink,
    forumRulesBitfield,
    forumRulesOptions,
    forumRulesUid,
    forumTopicsPerPage,
    forumType,
    forumStatus,
    forumPosts,
    forumTopics,
    forumTopicsReal,
    forumLastPostId,
    forumLastPosterId,
    forumLastPostSubject,
    forumLastPostTime,
    forumLastPosterName,
    forumLastPosterColor,
    forumFlags,
    forumOptions,
    displaySubforumList,
    displayOnIndex,
    enableIndexing,
    enableIcons,
    enablePrune,
    pruneNext,
    pruneDays,
    pruneViewed,
    pruneFreq,
  ] = args;

  forums.push({
    forumId,
    parentId,
    forumParents: (hex2ascii(forumParents).match(/"(.+?)"/g) ?? []).map(parent => parent.replace(/"/g, '')),
    forumName,
    forumDesc: strip(hex2ascii(forumDesc)),
    // forumType,
    // forumStatus,
    // forumPosts,
    forumTopics,
    // forumLastPostId,
    // forumLastPosterId,
    // forumLastPostSubject,
    // forumLastPostTime,
    // forumLastPosterName,
    // forumLastPosterColor,
  });
};

addForum(79, 0, 1, 6, '', 'Clan', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 0, 0, 0, 0, 0, 0, 0, '', 0, '', '', 32, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(80, 0, 7, 26, '', 'Servers', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 0, 0, 0, 0, 0, 0, 0, '', 0, '', '', 32, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(84, 0, 27, 36, '', 'Technology', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 0, 0, 0, 0, 0, 0, 0, '', 0, '', '', 32, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(85, 0, 37, 50, '', 'Community', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 0, 0, 0, 0, 0, 0, 0, '', 0, '', '', 32, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(86, 0, 51, 72, '', 'Administration', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 0, 0, 0, 0, 0, 0, 0, '', 0, '', '', 32, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(19, 86, 70, 71, '0x613a313a7b693a38363b613a323a7b693a303b733a31343a2241646d696e697374726174696f6e223b693a313b693a303b7d7d', 'Recycle Bin', '0x5468697320626f61726420696e636c75646573206f6c642c206f757464617465642c206f7220697272656c6576616e7420636f6e74656e742066726f6d204e4e4a47207468726f7567686f75742074696d652e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 1, 1512, 216, 216, 36987, 2, 'Re: Dear Gash/Ben/Quack', 1320278615, '๖Mr. Gash', '000000', 34, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(34, 79, 4, 5, '0x613a313a7b693a37393b613a323a7b693a303b733a343a22436c616e223b693a313b693a303b7d7d', 'Donations', '0x506c65617365206372656174652061206e657720746f70696320696620796f75206861766520646f6e6174656420746f204e4e4a4720696e206f7264657220746f2070726576656e7420636f6e667573696f6e20616e6420746f20656e61626c6520796f757220564950206163636573732e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 320, 110, 110, 37119, 2, 'Re: Aids Dog', 1320453091, '๖Mr. Gash', '000000', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(3, 80, 8, 11, '0x613a313a7b693a38303b613a323a7b693a303b733a373a2253657276657273223b693a313b693a303b7d7d', 'Garry\'s Mod: TerrorTown', '0x5365727665722049503a205b623a317a6475683578365d3230382e3134362e34342e31393a32373031355b2f623a317a6475683578365d0a54616c6b2061626f75742054545420686572652e', 'QA==', 7, '1zduh5x6', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 2478, 236, 236, 38160, 1094, 'Re: Lets Spread the word!', 1321816131, 'Loliconvict', '', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(22, 3, 9, 10, '0x613a323a7b693a38303b613a323a7b693a303b733a373a2253657276657273223b693a313b693a303b7d693a333b613a323a7b693a303b733a32333a2247617272792773204d6f643a20546572726f72546f776e223b693a313b693a313b7d7d', 'TTT Suggestions', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 1653, 142, 142, 38073, 612, 'Bring back Richland And MineCraft?', 1321635106, 'CoreyW.Rogerson', '', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(12, 80, 12, 15, '0x613a313a7b693a38303b613a323a7b693a303b733a373a2253657276657273223b693a313b693a303b7d7d', 'Garry\'s Mod: JailBreak', '0x5365727665722049503a205b623a32756f6d756431695d3137332e3230382e3230302e3133383a32373031365b2f623a32756f6d756431695d0a54616c6b2061626f7574204a61696c427265616b20686572652e0a536572766572204d616e616765723a20517561636b', 'QA==', 7, '2uomud1i', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 1709, 177, 177, 38182, 1206, 'BLACKLIST', 1321825234, 'Archon45', '', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(30, 12, 13, 14, '0x613a323a7b693a38303b613a323a7b693a303b733a373a2253657276657273223b693a313b693a303b7d693a31323b613a323a7b693a303b733a32323a2247617272792773204d6f643a204a61696c427265616b223b693a313b693a313b7d7d', 'Jail Suggestions', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 390, 46, 46, 38039, 375, 'NNJG Jailbreak video Tutorial', 1321504140, 'Norple', '', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(4, 84, 28, 31, '0x613a313a7b693a38343b613a323a7b693a303b733a31303a22546563686e6f6c6f6779223b693a313b693a303b7d7d', 'Miscellaneous Games', '0x54616c6b2061626f757420616e79206f746865722067616d6573206f722067616d656d6f64657320686572652e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 663, 79, 79, 38175, 292, 'Re: Skyrim Discussion', 1321823425, 'NutterButter', '', 114, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(106, 105, 23, 24, '0x613a323a7b693a38303b613a323a7b693a303b733a373a2253657276657273223b693a313b693a303b7d693a3130353b613a323a7b693a303b733a32303a224d696e6563726166743a20476f6c646372616674223b693a313b693a313b7d7d', 'Goldcraft Suggestions', '0x506f737420696465617320796f7520776f756c64206c696b6520746f207365652061646465642f72656d6f7665642f666978656420696e207468652073657276657221', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 90, 18, 18, 36708, 456, 'Re: Race For Wool Competition Idea', 1319990055, 'Pirate43', 'FF6600', 112, 0, 1, 1, 1, 0, 0, 0, 7, 7, 1);
addForum(104, 24, 43, 44, '0x613a323a7b693a38353b613a323a7b693a303b733a393a22436f6d6d756e697479223b693a313b693a303b7d693a32343b613a323a7b693a303b733a393a224f66662d546f706963223b693a313b693a313b7d7d', 'Reviews', '0x556e6c65617368207468652063726974696320696e7369646520796f752120526576696577206d6f766965732c2067616d65732c20626f6f6b732c206f7220707265747479206d75636820616e797468696e6720686572652e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 140, 27, 27, 37502, 464, 'Re: Batman: Arkham City AND Batman: Arkham Asylum', 1320728271, 'TinfoilHatter', 'FF6600', 112, 0, 1, 1, 1, 1, 0, 0, 7, 7, 1);
addForum(59, 84, 32, 33, '0x613a313a7b693a38343b613a323a7b693a303b733a31303a22546563686e6f6c6f6779223b693a313b693a303b7d7d', 'Tech Zone', '0x486176696e672074726f75626c65207769746820796f757220636f6d70757465723f0a466f756e642061206e65617420636f6d707574657220747269636b20796f752077616e7420746f2073686f772075733f0a4865726527732074686520706c61636520746f20706f73742069742e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 484, 80, 80, 38122, 517, 'Re: Taking Requests', 1321751024, 'NBLCKK', '', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(26, 85, 38, 39, '0x613a313a7b693a38353b613a323a7b693a303b733a393a22436f6d6d756e697479223b693a313b693a303b7d7d', 'Introduction', '0x4e657720746f2074686520666f72756d733f20496e74726f6475636520796f757273656c6620686572652e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 854, 122, 122, 38117, 612, 'Hello', 1321750242, 'CoreyW.Rogerson', '', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(24, 85, 40, 45, '0x613a313a7b693a38353b613a323a7b693a303b733a393a22436f6d6d756e697479223b693a313b693a303b7d7d', 'Off-Topic', '0x496e207468697320666f72756d2c206665656c206672656520746f2074616c6b2061626f757420616e797468696e6720616e642065766572797468696e67207468617420646f65736e27742066616c6c20756e64657220746865206f746865722063617465676f726965732e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 3904, 385, 385, 38180, 769, 'Re: What is your favorite nostalgic game?', 1321824341, 'Mimeyy', '', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(1, 85, 46, 47, '0x613a313a7b693a38353b613a323a7b693a303b733a393a22436f6d6d756e697479223b693a313b693a303b7d7d', 'General Discussion', '0x4665656c206672656520746f206469736375737320616e797468696e672072656c6174656420746f204e4e4a472e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 3640, 322, 322, 38191, 4, 'Re: about subsilver2', 1321831022, 'Kryzoid', '000099', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(21, 85, 48, 49, '0x613a313a7b693a38353b613a323a7b693a303b733a393a22436f6d6d756e697479223b693a313b693a303b7d7d', 'Spam Box', '0x52756c657320322c20332c20372c20382c20392c20616e64203130206f662074686520666f72756d7320617265206578637573656420686572652e20556e6c656173682068656c6c2e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 129, 16, 16, 38186, 769, 'Re: Digital Art', 1321829492, 'Mimeyy', '', 98, 0, 1, 1, 1, 1, 1, 1322003234, 4, 1, 7);
addForum(17, 86, 52, 53, '0x613a313a7b693a38363b613a323a7b693a303b733a31343a2241646d696e697374726174696f6e223b693a313b693a303b7d7d', 'Bug Reports', '0x496620796f752066696e6420612062756720696e20612073657276657220706f737420697420686572652e20506c6561736520696e636c7564652073637265656e73686f747320616e64206173206d75636820696e666f726d6174696f6e20617320706f737369626c652e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 183, 35, 35, 38187, 101, 'Re: Devtown Hitboxes', 1321829585, 'Dum', '000099', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(14, 121, 57, 58, '0x613a323a7b693a38363b613a323a7b693a303b733a31343a2241646d696e697374726174696f6e223b693a313b693a303b7d693a3132313b613a323a7b693a303b733a31303a224d6f6465726174696f6e223b693a313b693a313b7d7d', 'Unban Requests', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 1499, 212, 212, 38190, 373, 'Re: Strange ban.', 1321830543, 'Balenti', '990000', 114, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(130, 4, 29, 30, '0x613a323a7b693a38343b613a323a7b693a303b733a31303a22546563686e6f6c6f6779223b693a313b693a303b7d693a343b613a323a7b693a303b733a31393a224d697363656c6c616e656f75732047616d6573223b693a313b693a313b7d7d', 'Team Fortress 2', '0x4b65657020616c6c205446322072656c617465642064697363757373696f6e20696e636c7564696e672074726164696e672c207175657374696f6e732c20636f6d6d656e74732c206576656e74732c206475656c732c207365727665722074616c6b2c20616e642073706563756c6174696f6e20686572652e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 8, 1, 1, 38041, 82, 'Re: Team Fortress 2 Subforum?', 1321504656, 'Domineeto', '', 112, 0, 1, 1, 1, 1, 0, 0, 7, 7, 1);
addForum(16, 86, 60, 65, '0x613a313a7b693a38363b613a323a7b693a303b733a31343a2241646d696e697374726174696f6e223b693a313b693a303b7d7d', 'Staff Applications', '0x5b623a313477766262666a5d5765206172652063757272656e746c7920616363657074696e67206170706c69636174696f6e7320666f7220746865204a61696c627265616b20616e642054726f75626c6520496e20546572726f7269737420546f776e20736572766572732121215b2f623a313477766262666a5d', 'QA==', 7, '14wvbbfj', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 6, 6, 6, 36095, 4, 'Re: Official Staff Application Template [READ BEFORE APPLYIN', 1319313053, 'Kryzoid', '000099', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(35, 16, 61, 62, '0x613a323a7b693a38363b613a323a7b693a303b733a31343a2241646d696e697374726174696f6e223b693a313b693a303b7d693a31363b613a323a7b693a303b733a31383a225374616666204170706c69636174696f6e73223b693a313b693a313b7d7d', 'Denied', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 1, 479, 81, 81, 36819, 2, 'Re: NutterButter\'s Application for Moderator', 1320091121, '๖Mr. Gash', '000000', 34, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(36, 16, 63, 64, '0x613a323a7b693a38363b613a323a7b693a303b733a31343a2241646d696e697374726174696f6e223b693a313b693a303b7d693a31363b613a323a7b693a303b733a31383a225374616666204170706c69636174696f6e73223b693a313b693a313b7d7d', 'Approved', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 1, 396, 34, 34, 37599, 2, 'Re: [TTT] Its a little late, but It\'s here.', 1320883862, '๖Mr. Gash', '000000', 34, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(18, 86, 66, 67, '0x613a313a7b693a38363b613a323a7b693a303b733a31343a2241646d696e697374726174696f6e223b693a313b693a303b7d7d', 'Staff Corner', '0x41646d696e6973747261746976652064697363757373696f6e20616e6420737563682e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 1342, 144, 144, 38198, 153, 'Re: Suggestion for Ban Requests', 1321835153, '[NNJG]Ben', '000000', 98, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
addForum(121, 86, 54, 59, '0x613a313a7b693a38363b613a323a7b693a303b733a31343a2241646d696e697374726174696f6e223b693a313b693a303b7d7d', 'Moderation', '0x50756e6973686d656e7420726571756573747320696e636c7564696e672074686f736520666f7220746865204a61696c627265616b20626c61636b6c6973742073686f756c6420626520706f737465642077697468696e206f6e65206f662074686520737562666f72756d7320686572652e0a496620796f75207769746e6573732061207374616666206d656d626572206f72205649502061627573696e6720746865697220706f7765722c205b75726c3d68747470262335383b2f2f6e6f6e657264736a7573746765656b73262334363b636f6d2f666f72756d2f756370262334363b7068703f693d706d26616d703b6d6f64653d636f6d706f736526616d703b753d3135333a36736766636570775d73656e6420612070726976617465206d65737361676520746f2042656e5b2f75726c3a36736766636570775d2e', 'EA==', 7, '6sgfcepw', '', '', 0, '', '', '', '', 7, '', 0, 1, 1, 0, 0, 0, 0, 0, '', 0, '', '', 112, 0, 1, 0, 1, 0, 0, 0, 7, 7, 1);
addForum(116, 84, 34, 35, '0x613a313a7b693a38343b613a323a7b693a303b733a31303a22546563686e6f6c6f6779223b693a313b693a303b7d7d', 'Source Engine', '0x4120666f72756d20666f72206d617070696e6720616e64204c756120736372697074696e672e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 114, 18, 18, 37085, 605, 'Re: New ttt maps By Fluffy Kitty', 1320404204, 'Udane', '009900', 112, 0, 1, 0, 1, 0, 0, 0, 7, 7, 1);
addForum(126, 80, 16, 19, '0x613a313a7b693a38303b613a323a7b693a303b733a373a2253657276657273223b693a313b693a303b7d7d', 'Garry\'s Mod: Puzzle', '0x5365727665722049503a205b623a326268756430716f5d3137332e3230382e3230302e3134313a32373031355b2f623a326268756430716f5d0a54616c6b2061626f75742050757a7a6c6520686572652e', 'QA==', 7, '2bhud0qo', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 49, 9, 9, 36441, 1140, 'Re: *cough* MAPS ARE HARD *cough*', 1319661357, 'nicholsml', '', 112, 0, 1, 1, 1, 1, 0, 0, 7, 7, 1);
addForum(122, 121, 55, 56, '0x613a323a7b693a38363b613a323a7b693a303b733a31343a2241646d696e697374726174696f6e223b693a313b693a303b7d693a3132313b613a323a7b693a303b733a31303a224d6f6465726174696f6e223b693a313b693a313b7d7d', 'Ban Requests', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 2127, 532, 532, 38188, 101, 'Re: [OGG]QWACK: Racism', 1321829670, 'Dum', '000099', 112, 0, 1, 1, 1, 1, 0, 0, 7, 7, 1);
addForum(127, 126, 17, 18, '0x613a323a7b693a38303b613a323a7b693a303b733a373a2253657276657273223b693a313b693a303b7d693a3132363b613a323a7b693a303b733a31393a2247617272792773204d6f643a2050757a7a6c65223b693a313b693a313b7d7d', 'Puzzle Suggestions', '', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 14, 2, 2, 35757, 605, 'Re: Extra !skip', 1319061414, 'Udane', '009900', 112, 0, 1, 1, 1, 1, 0, 0, 7, 7, 1);
addForum(105, 80, 20, 25, '0x613a313a7b693a38303b613a323a7b693a303b733a373a2253657276657273223b693a313b693a303b7d7d', 'Minecraft: Goldcraft', '0x5365727665722049503a205b623a3336676f347130305d69702e676f6c6463726166742e6f72675b2f623a3336676f347130305d0a54616c6b2061626f7574204d696e65637261667420616e642f6f7220476f6c64637261667420686572652e', 'QA==', 7, '36go4q00', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 496, 92, 92, 38199, 456, 'Re: So yea, Minecraft 1.0 is out', 1321835231, 'Pirate43', 'FF6600', 112, 0, 1, 1, 1, 0, 0, 0, 7, 7, 1);
addForum(103, 79, 2, 3, '0x613a313a7b693a37393b613a323a7b693a303b733a343a22436c616e223b693a313b693a303b7d7d', 'Announcements', '0x4b65657020757020746f20646174652077697468206f7572206e65777320616e6420757064617465732e204d616a6f72207570646174657320616e6420666f72756d2072756c65732061726520617661696c61626c652065766572797768657265207468726f7567686f75742074686520666f72756d732e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 40, 20, 20, 36290, 153, 'Re: Ben', 1319504858, '[NNJG]Ben', '000000', 112, 0, 1, 0, 1, 0, 0, 0, 7, 7, 1);
addForum(97, 24, 41, 42, '0x613a323a7b693a38353b613a323a7b693a303b733a393a22436f6d6d756e697479223b693a313b693a303b7d693a32343b613a323a7b693a303b733a393a224f66662d546f706963223b693a313b693a313b7d7d', 'Favorites', '0x506f7374206661766f726974652077656273697465732c20766964656f732c206d757369632c2070696374757265732c2061727469636c65732c206574632e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 470, 79, 79, 38015, 373, 'Re: NNJG - ANIME style', 1321471902, 'Balenti', '990000', 112, 0, 1, 1, 1, 0, 0, 0, 7, 7, 1);
addForum(124, 86, 68, 69, '0x613a313a7b693a38363b613a323a7b693a303b733a31343a2241646d696e697374726174696f6e223b693a313b693a303b7d7d', 'Top-Level Administration', '0x466f722074686520686967686573742072616e6b696e67206f66666963657273206f6e6c792e20446f206e6f74206d616b65207468697320666f72756d206b6e6f776e2e20497420646f6573206e6f742065786973742e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 222, 13, 13, 37967, 153, 'Re: jailbreak', 1321357113, '[NNJG]Ben', '000000', 48, 0, 1, 0, 1, 0, 0, 0, 7, 7, 1);
addForum(109, 105, 21, 22, '0x613a323a7b693a38303b613a323a7b693a303b733a373a2253657276657273223b693a313b693a303b7d693a3130353b613a323a7b693a303b733a32303a224d696e6563726166743a20476f6c646372616674223b693a313b693a313b7d7d', 'Whitelist Requests', '0x4d616b652061206e657720746872656164206865726520696620796f752061726520696e746572657374656420696e20706c6179696e67206f6e20476f6c6463726166742e', '', 7, '', '', '', 0, '', '', '', '', 7, '', 0, 1, 0, 241, 111, 111, 37897, 252, 'Re: Weard22\'s Whitelist', 1321299433, 'Radiophobia', '990000', 112, 0, 1, 1, 1, 0, 0, 0, 7, 7, 1);

export default forums;
