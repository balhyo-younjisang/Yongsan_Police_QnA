import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Phone, 
  MessageCircle, 
  Eye, 
  ChevronDown,
  ChevronRight,
  Search,
  HelpCircle,
  Sparkles,
  Heart,
  Zap
} from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'school-violence' | 'stalking';
}

const faqData: FAQItem[] = [
  // 학교폭력 예방 Q&A
  {
    id: 1,
    question: "학교폭력의 유형에는 어떤 것이 있나요?",
    answer: "학교 내·외에서 학생을 대상으로 발생한 신체폭력(상해·폭행·감금 등), 언어폭력(협박·명예훼손 등), 금품갈취, 강요(강제적 심부름 등), 성폭력, 따돌림, 사이버폭력 등으로 구분할 수 있으며, 위 나열된 행위에 한정되지 아니하고 이와 유사하거나 동질의 행위로서 학생의 신체·정신 또는 재산상의 피해를 수반하는 모든 행위를 포함하는 것입니다.",
    category: 'school-violence'
  },
  {
    id: 2,
    question: "학교폭력 신고 방법은 무엇인가요?",
    answer: "117신고센터로(국번없이117) 전화·문자(#117)·카카오톡 상담 접수가 가능하며 24시간 운영되는 상담 전화입니다. 또한 학교 WEE클래스에서도 관련 상담을 받을 수 있습니다.",
    category: 'school-violence'
  },
  {
    id: 3,
    question: "학교폭력을 당하거나 목격했을때는 어떻게 해야하나요?",
    answer: "적극적인 대처가 중요합니다. 싫다는 의사표시를 분명히 한 후 117신고센터나 학교 등 주변에 도움을 요청해야 합니다.",
    category: 'school-violence'
  },
  {
    id: 4,
    question: "피해자가 아닌 제3자도 117신고가 가능한가요?",
    answer: "학교폭력 117신고는 피해 학생 본인은 물론이고 교사·학부모·친구 등 제3자도 신고가 가능합니다.",
    category: 'school-violence'
  },
  {
    id: 5,
    question: "117신고가 접수되면 어떤 방식으로 처리되나요?",
    answer: "117신고센터에서 접수한 신고 건은 사안의 긴급성 및 중대성·신고내용·신고자 의사 등을 종합하여 상담 및 절차안내, 긴급출동, 기관 연계 등으로 분류하여 처리됩니다.",
    category: 'school-violence'
  },
  {
    id: 6,
    question: "의도적으로 폭행을 가했을때만 학교폭력으로 볼 수 있나요?",
    answer: "장난을 빙자해서 한 꼬집기·때리기·밀치기 등의 행동들도 상대 학생이 폭력행위로 인식한다면 학교폭력에 해당 될 수 있습니다.",
    category: 'school-violence'
  },
  {
    id: 7,
    question: "폭력행위를 직접 하지 않고 동조하거나 시키는 행위도 학교폭력에 해당하나요?",
    answer: "타인을 시켜서 폭력을 행사하도록 하거나 욕설을 하도록 한 경우 뿐 아니라 학교폭력 현장에 따라가서 피해자가 위압감을 갖도록 동조하는 행위도 학교폭력에 가담한 것으로 인정될 수 있습니다.",
    category: 'school-violence'
  },
  {
    id: 8,
    question: "카카오톡 등 SNS상의 폭언이나 욕설도 학교폭력에 해당하나요?",
    answer: "당사자를 대상으로 SNS상에서 욕설을 하는 행위뿐 아니라 당사자가 없는 단체대화방에서의 욕설도 학교폭력에 해당할 수 있습니다. 또한, 사이버상의 성폭력이나 명예훼손·스토킹도 학교폭력에 해당될 수 있습니다.",
    category: 'school-violence'
  },
  {
    id: 9,
    question: "기타 스마트폰을 이용한 사이버 폭력에는 어떤 종류가 있나요?",
    answer: "사이버상의 욕설·폭언뿐 아니라 특정 웹사이트 가입 후 보상금 갈취, 기프티콘 강요, 피해자의 카드를 결제 수단으로 등록하는 행위 등도 학교폭력에 해당 될 수 있습니다.",
    category: 'school-violence'
  },
  {
    id: 10,
    question: "학교폭력으로 형사처벌까지 받을 수도 있나요?",
    answer: "학교폭력의 경우 교육청의 학교폭력대책심위위원회의 처분과 별도로 형사처벌까지 받을 수 있습니다.",
    category: 'school-violence'
  },
  // 스토킹 범죄 Q&A
  {
    id: 11,
    question: "스토킹 행위란 무엇인가요?",
    answer: "'스토킹행위'란 상대방(피해자) 의사에 반해 정당한 이유 없이 다음 각 목의 어느 하나에 해당하는 행위를 하여 상대방에게 불안감 또는 공포심을 일으키는 것: 가. 상대방 등에게 접근하거나 따라다니거나 진로를 막아서는 행위, 나. 상대방 등의 주거 등에서 기다리거나 지켜보는 행위, 다. 우편·전화·팩스 또는 정보통신망을 이용한 행위, 라. 물건 등을 도달하게 하거나 주거 등에 두는 행위, 마. 물건 등을 훼손하는 행위, 바. 개인정보를 제3자에게 제공하거나 배포·게시하는 행위, 사. 상대방 등을 가장하는 행위",
    category: 'stalking'
  },
  {
    id: 12,
    question: "헤어진 전 연인이 따라다니는 경우 스토킹 행위에 해당하는지?",
    answer: "상대방이 '불안감 또는 공포심'을 느끼고 있고 행위자의 행위가 상대방 의사에 반하였다고 볼 수 있는 경우 스토킹행위에 해당합니다.",
    category: 'stalking'
  },
  {
    id: 13,
    question: "헤어진 전 연인이 편지를 수 차례 보내는 경우 스토킹행위에 해당하는지?",
    answer: "상대방이 명확하게 거부 의사를 표현하는 경우뿐만 아니라 거부 의사를 표현하지 않았음에도 상대방의 의사에 반하는 것으로 추정되는 경우에도 스토킹 행위에 해당할 수 있습니다.",
    category: 'stalking'
  },
  {
    id: 14,
    question: "피해자를 괴롭힐 목적으로 치킨을 배달시킨 경우 스토킹 행위에 해당하는지?",
    answer: "「스토킹처벌법」은 물건에 제한을 두고 있지 않습니다. 따라서 이 사례는 「스토킹처벌법」제2조 제1호 라목에 해당하는 스토킹행위로 볼 수 있습니다.",
    category: 'stalking'
  },
  {
    id: 15,
    question: "유명 연예인을 팬들이 따라다니는 경우 스토킹 행위로 볼 수 있는지?",
    answer: "유명 연예인이라도 팬으로서 응원·관심의 정도가 지나쳐 상대방에게 불안감 또는 공포심을 느끼게 하는 경우에는 스토킹 행위로 볼 수 있습니다.",
    category: 'stalking'
  }
];

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <button
          onClick={onToggle}
          className="w-full px-8 py-6 text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{item.id}</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 leading-relaxed">
                  {item.question}
                </h3>
              </div>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen 
                  ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
              }`}>
                {isOpen ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </div>
            </div>
          </div>
        </button>
        
        {isOpen && (
          <div className="px-8 pb-6">
            <div className="border-t border-gradient-to-r from-blue-200 to-indigo-200 pt-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-base">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'school-violence' | 'stalking'>('school-violence');
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1]));
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = faqData.filter(item => 
    item.category === activeTab && 
    (item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-white shadow-lg border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  용산경찰서
                </h1>
                <p className="text-gray-600 font-medium">범죄 예방 Q&A</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white shadow-lg">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">긴급신고: 112</span>
              </div>
              <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white shadow-lg">
                <MessageCircle className="w-4 h-4" />
                <span className="font-semibold">117신고센터</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium mb-6">
            <Heart className="w-5 h-5" />
            <span>학교 폭력과 스토킹 범죄에 대한 정보를 제공해요</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            범죄 예방 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Q&A</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            학교폭력과 스토킹 범죄에 대한 전문적인 정보와 대처 방법을 제공합니다. 
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-20"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="질문이나 답변 내용을 검색해보세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-lg shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-2 max-w-2xl mx-auto">
            <nav className="flex space-x-2">
              <button
                onClick={() => setActiveTab('school-violence')}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'school-violence'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <Shield className="w-6 h-6" />
                  <span>학교폭력 예방</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('stalking')}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'stalking'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <Eye className="w-6 h-6" />
                  <span>스토킹 범죄</span>
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Category Description */}
        <div className="mb-12">
          {activeTab === 'school-violence' ? (
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">학교폭력 예방을 위한 Q&A</h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    학교폭력의 정의, 유형, 신고 방법, 대처 방법 등에 대한 자주 묻는 질문과 답변을 제공합니다. 
                    학교폭력 예방과 신속한 대응을 위한 정보를 확인하세요.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">스토킹 범죄 Q&A</h2>
                  <p className="text-purple-100 text-lg leading-relaxed">
                    스토킹 행위의 정의, 유형, 대처 방법 등에 대한 자주 묻는 질문과 답변을 제공합니다. 
                    스토킹 범죄 예방과 피해 대응을 위한 정보를 확인하세요.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FAQ List */}
        <div className="space-y-6 mb-16">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl shadow-xl">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">검색 결과가 없습니다</h3>
              <p className="text-gray-600 text-lg">다른 검색어를 입력해보세요.</p>
            </div>
          )}
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-br from-red-500 via-pink-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">긴급 연락처</h3>
              <p className="text-red-100 text-lg">24시간 언제든지 연락하세요</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">긴급신고</p>
                  <p className="text-red-100 text-2xl font-bold">112</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">117신고센터</p>
                  <p className="text-blue-100 text-2xl font-bold">117</p>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default App;