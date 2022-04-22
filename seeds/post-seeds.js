const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'Aliquam efficitur justo vitae leo ultricies, et fermentum sem venenatis. Maecenas dignissim nisl leo, rhoncus ullamcorper libero auctor vel. Pellentesque semper, nunc eu varius malesuada, dui velit consectetur diam, id feugiat purus dui et nisl. Etiam elit ante, consectetur eu magna at, hendrerit fermentum dolor. Ut consequat fermentum sapien vitae dictum. Vestibulum risus massa, semper ac viverra non, ultrices ac justo. Donec malesuada arcu scelerisque, sollicitudin nisl nec, finibus enim. Sed imperdiet dictum felis nec aliquam. Proin ultrices tempus nisl, ac tincidunt libero hendrerit in. Curabitur ullamcorper convallis arcu, nec malesuada odio auctor sit amet. Praesent quis mauris nec dolor dapibus faucibus. Sed sollicitudin nibh non sapien dictum, non pellentesque augue tristique. Pellentesque magna ligula, scelerisque vitae faucibus ultrices, lacinia eleifend sem.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Nunc aliquam orci justo, et euismod diam imperdiet id. Vestibulum sagittis, lorem sit amet feugiat accumsan, felis lacus tincidunt neque, nec volutpat lacus nibh vel nibh. Etiam varius lectus ut dolor luctus, sit amet blandit tellus gravida. Nunc pretium varius nunc nec varius. Curabitur ex velit, mollis id quam vulputate, vehicula condimentum tortor. Nulla enim ante, sodales sed imperdiet id, tincidunt non mi. Cras lobortis elit eget purus tempor, vel efficitur enim fringilla. Cras cursus id urna eu tempor. Curabitur ut velit quis sem blandit rutrum non id metus. Nulla sit amet risus eu nibh pretium sollicitudin vitae eu eros. Fusce in accumsan elit, in tristique ex. Etiam ac nunc auctor dui gravida rutrum.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'Proin faucibus magna vestibulum quam sollicitudin laoreet. Proin cursus ornare metus, non aliquam nisi pharetra id. In hac habitasse platea dictumst. Proin tortor dolor, finibus sed justo nec, egestas elementum est. Fusce a urna nulla. Aliquam erat volutpat. Cras mollis gravida arcu, quis gravida nunc porttitor ut. Ut suscipit, velit id rutrum auctor, velit mauris tincidunt diam, id convallis felis sem eu tellus. Vestibulum sit amet nulla dolor. Donec pulvinar, neque a eleifend convallis, libero nunc porta ligula, in tempus lectus sapien eget mi. Maecenas varius purus sed viverra consectetur. Phasellus ornare quis libero rhoncus ultricies. Nunc laoreet vitae lacus eu efficitur. Nunc lorem nulla, ultrices vel ex at, fringilla laoreet urna.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'Aliquam efficitur justo vitae leo ultricies, et fermentum sem venenatis. Maecenas dignissim nisl leo, rhoncus ullamcorper libero auctor vel. Pellentesque semper, nunc eu varius malesuada, dui velit consectetur diam, id feugiat purus dui et nisl. Etiam elit ante, consectetur eu magna at, hendrerit fermentum dolor. Ut consequat fermentum sapien vitae dictum. Vestibulum risus massa, semper ac viverra non, ultrices ac justo. Donec malesuada arcu scelerisque, sollicitudin nisl nec, finibus enim. Sed imperdiet dictum felis nec aliquam. Proin ultrices tempus nisl, ac tincidunt libero hendrerit in. Curabitur ullamcorper convallis arcu, nec malesuada odio auctor sit amet. Praesent quis mauris nec dolor dapibus faucibus. Sed sollicitudin nibh non sapien dictum, non pellentesque augue tristique. Pellentesque magna ligula, scelerisque vitae faucibus ultrices, lacinia eleifend sem.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'Etiam lobortis nisl a dui pellentesque, ac lobortis urna scelerisque. Integer ultricies elit a libero ultrices, id scelerisque risus rhoncus. Donec non tellus quis dolor tempus tincidunt quis quis lacus. Aliquam nec lacus felis. Nulla sed metus eu velit aliquet finibus. Fusce condimentum, augue eu fermentum porta, ipsum justo tincidunt lacus, id mattis tellus mi in nisi. Quisque pharetra nunc fermentum, fermentum tellus sed, tincidunt purus. Quisque ut libero et augue tempus lobortis eget in nibh. Mauris a rhoncus quam, id lacinia ante. Aenean eleifend magna velit, nec bibendum sem porta ut. Phasellus in orci elementum, tincidunt eros quis, porta turpis. In sagittis velit ut libero pulvinar fermentum. Ut rhoncus, nibh at mollis convallis, justo sem iaculis quam, vel tempus metus dolor gravida quam.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'Donec tempor convallis mi sit amet condimentum. Nullam urna nisi, sollicitudin facilisis purus vel, aliquam molestie lectus. Ut orci leo, rutrum sit amet elementum id, euismod in lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit tempor nisl, vel ultricies erat ultrices sed. Duis pulvinar id mi vitae bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Vestibulum sagittis, lorem sit amet feugiat accumsan, felis lacus tincidunt neque, nec volutpat lacus nibh vel nibh. Etiam varius lectus ut dolor luctus, sit amet blandit tellus gravida. Nunc pretium varius nunc nec varius. Curabitur ex velit, mollis id quam vulputate, vehicula condimentum tortor. Nulla enim ante, sodales sed imperdiet id, tincidunt non mi. Cras lobortis elit eget purus tempor, vel efficitur enim fringilla. Cras cursus id urna eu tempor. Curabitur ut velit quis sem blandit rutrum non id metus. Nulla sit amet risus eu nibh pretium sollicitudin vitae eu eros. Fusce in accumsan elit, in tristique ex. Etiam ac nunc auctor dui gravida rutrum.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Maecenas dignissim nisl leo, rhoncus ullamcorper libero auctor vel. Pellentesque semper, nunc eu varius malesuada, dui velit consectetur diam, id feugiat purus dui et nisl. Etiam elit ante, consectetur eu magna at, hendrerit fermentum dolor. Ut consequat fermentum sapien vitae dictum. Vestibulum risus massa, semper ac viverra non, ultrices ac justo. Donec malesuada arcu scelerisque, sollicitudin nisl nec, finibus enim. Sed imperdiet dictum felis nec aliquam. Proin ultrices tempus nisl, ac tincidunt libero hendrerit in. Curabitur ullamcorper convallis arcu, nec malesuada odio auctor sit amet. Praesent quis mauris nec dolor dapibus faucibus. Sed sollicitudin nibh non sapien dictum, non pellentesque augue tristique. Pellentesque magna ligula, scelerisque vitae faucibus ultrices, lacinia eleifend sem.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'Pellentesque semper, nunc eu varius malesuada, dui velit consectetur diam, id feugiat purus dui et nisl. Etiam elit ante, consectetur eu magna at, hendrerit fermentum dolor. Ut consequat fermentum sapien vitae dictum. Vestibulum risus massa, semper ac viverra non, ultrices ac justo. Donec malesuada arcu scelerisque, sollicitudin nisl nec, finibus enim. Sed imperdiet dictum felis nec aliquam. Proin ultrices tempus nisl, ac tincidunt libero hendrerit in. Curabitur ullamcorper convallis arcu, nec malesuada odio auctor sit amet.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'Phasellus quis quam vitae arcu consectetur ultrices ac a libero. Vestibulum iaculis consectetur mollis. Nam vel tincidunt mauris. Duis quis ipsum magna. Nulla facilisi. Sed est justo, ullamcorper auctor finibus fringilla, porta feugiat velit. In a dictum justo. Fusce scelerisque rhoncus eros, nec cursus ligula malesuada eget. Ut tempor semper ante, at dictum eros elementum sollicitudin. Vivamus id tortor ut dui posuere pretium at sodales lacus. Sed gravida semper leo, id ullamcorper metus semper ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean et convallis massa. Mauris luctus semper ligula, at pharetra urna dictum nec. Aenean libero neque, volutpat a dapibus in, gravida nec leo. ',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Quisque non sagittis lacus. Sed congue, dui a auctor congue, mi tellus imperdiet erat, nec finibus urna nunc sit amet felis. Vivamus eu nunc justo. Ut sagittis, metus sed elementum interdum, justo arcu lobortis metus, a aliquam felis ligula vitae justo. Cras id lectus lacus. Ut sed mi et dolor venenatis molestie laoreet a est. Aliquam ut efficitur orci. Donec quis congue odio. Donec facilisis dolor eu sodales commodo. Praesent sem dui, fermentum elementum luctus sed, imperdiet a urna. Donec consequat commodo enim, non blandit enim suscipit sed. Sed vestibulum dignissim dignissim. In gravida consequat arcu suscipit porta. Donec varius sem turpis, a aliquam mauris luctus fringilla. Nullam sed lacus orci. ',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 'Morbi enim dolor, malesuada vel convallis non, convallis at magna. Sed condimentum nisi justo, et euismod nisl fermentum in. Fusce sodales lorem at nunc posuere, fringilla blandit est viverra. Proin nec mi in tortor commodo viverra quis et dui. Duis vestibulum, neque sit amet suscipit rhoncus, felis nunc malesuada neque, sit amet egestas leo est ac lorem. Proin nec nibh id odio fringilla molestie. Morbi lorem urna, scelerisque sit amet porttitor accumsan, ullamcorper ac dui. Suspendisse mauris sem, placerat sit amet dui sed, pulvinar ullamcorper velit. ',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content: ' Nulla metus tellus, tincidunt sit amet efficitur id, venenatis nec lacus. Sed aliquet magna urna, eu dapibus elit dictum quis. Aliquam ex risus, tempus tempor urna non, varius accumsan odio. Donec pharetra orci ex, at pellentesque leo finibus sed. Nam molestie iaculis tellus, pharetra blandit eros. Cras fermentum nisl diam, vel tempus odio elementum a. Sed leo leo, varius sit amet malesuada sit amet, dapibus et velit. Proin porttitor euismod venenatis. Phasellus libero dui, consectetur in risus vitae, fermentum lacinia risus. Quisque ac sem eleifend, viverra nisl id, gravida orci. Proin pellentesque, lorem eu lacinia euismod, diam tortor iaculis dui, in ullamcorper odio turpis non mi. ',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Pellentesque vulputate nunc orci, a facilisis ipsum fringilla a. Suspendisse sit amet blandit lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam odio, sodales ut imperdiet vitae, dapibus eu felis. Vestibulum sodales elit at lectus rutrum, vitae vulputate quam cursus. Sed sit amet vulputate elit. Morbi sodales magna justo, eget vestibulum ante tempor vitae. Nunc euismod quam non orci molestie, at egestas sapien auctor. Pellentesque ornare magna eget metus tristique ornare. Nulla blandit ex euismod, accumsan neque a, cursus neque. Phasellus interdum tellus at quam ultrices, vel luctus metus imperdiet. Sed dignissim commodo dui et bibendum. Phasellus eu tempor erat, a luctus arcu. ',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'Integer placerat enim tellus, a luctus turpis maximus ac. Nam maximus eleifend elit, vel egestas mauris ullamcorper et. Suspendisse rutrum felis vel ligula rhoncus commodo. Integer rhoncus venenatis nunc vitae tristique. Sed tempor, justo non fermentum scelerisque, augue arcu varius nisl, et venenatis magna orci in ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed aliquet nulla lectus, quis interdum velit fermentum a. Curabitur vel sapien nec urna elementum malesuada. ',
    user_id: 3
  },
  {
    title:'Vestibulum ante ipsum primis cubilia Curae; Mauris viverra diam vitae quam.',
      post_content: 'Nulla facilisi. Nunc tempus egestas aliquet. Nullam varius magna vitae condimentum consectetur. Nulla sollicitudin diam felis, mollis imperdiet arcu ornare in. Curabitur vehicula, erat id hendrerit ornare, nibh felis ullamcorper dui, quis sodales ante urna ac ipsum. Proin convallis vulputate consequat. Praesent iaculis dapibus malesuada. Pellentesque ultrices turpis in felis venenatis elementum. Nam ultrices purus urna, at laoreet erat eleifend in. Vivamus condimentum risus quis ante porta fringilla. Ut commodo varius quam nec lobortis. Praesent convallis turpis lectus, eget vulputate est convallis nec. Nunc venenatis consequat semper. Sed vel urna in justo rhoncus aliquam facilisis id sem. ',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Praesent sed egestas erat. Fusce et nibh orci. Proin felis libero, faucibus sed sodales nec, ultricies in risus. Vestibulum pulvinar id ante eu luctus. Pellentesque volutpat posuere tempus. In at orci at sem ornare finibus sed vitae enim. Sed suscipit eros eu leo venenatis tempor quis sed lorem. Ut sed sagittis tortor. Morbi eleifend arcu sed justo auctor, vitae rhoncus turpis lobortis. Nulla tincidunt, turpis quis egestas tempor, erat justo tempus ante, vulputate mollis nulla massa vel risus. Phasellus vel massa laoreet tellus hendrerit pretium id ac arcu. Suspendisse at lacus eget metus volutpat pretium in in lectus. ',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_content: 'Mauris imperdiet purus lorem, nec suscipit diam sodales vitae. Aliquam id ligula in risus ullamcorper imperdiet sed at massa. Suspendisse non mi in tortor bibendum porttitor. Aliquam erat volutpat. Cras mattis dolor et maximus laoreet. Aenean id suscipit nisi. Morbi tempor feugiat dapibus. Duis iaculis at turpis sed ultrices. Maecenas iaculis leo id tempor sodales. Integer hendrerit mauris dolor, quis pulvinar mauris lobortis eget. Curabitur id turpis sem. ',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'Donec viverra suscipit leo, et molestie ipsum mattis in. Phasellus iaculis venenatis eros a elementum. Nulla turpis diam, lobortis sed ipsum sit amet, placerat luctus lacus. Nunc non sollicitudin orci. Sed auctor fermentum leo, id posuere nisi blandit imperdiet. Sed ultrices cursus sapien in imperdiet. In id nisl lorem. Nulla ullamcorper tellus turpis, et sodales velit sagittis vel. Curabitur pharetra efficitur lectus sed eleifend. Donec ultrices quam eget sollicitudin pretium. Nunc non orci dolor. Integer eu finibus purus. Pellentesque finibus imperdiet auctor. Nullam sed urna lorem. ',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'Nullam tincidunt, lectus id venenatis ornare, lacus magna rhoncus neque, nec cursus ligula lectus a libero. Etiam tincidunt diam et blandit tempor. Proin aliquet maximus nulla, pulvinar faucibus neque maximus non. Duis vehicula sollicitudin erat varius cursus. Integer id urna risus. Nulla vehicula ante vitae urna pharetra lobortis. In dictum sapien vitae consequat placerat. Proin ac rhoncus diam, sit amet aliquet diam. Integer malesuada faucibus arcu. Quisque gravida felis ligula, sit amet mollis nisi dapibus ac. Etiam pharetra lorem turpis, in placerat urna commodo malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    user_id: 7
  }
];

const postSeeds = () => Post.bulkCreate(postdata);

module.exports = postSeeds;