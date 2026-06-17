const TAXONOMIA_DADOS = {
  "taxonomia_concursos": [
    {
      "id": "civil",
      "nivel_1": "Direito Civil",
      "divisoes": [
        {
          "id": "civil_lindb_teoria",
          "nivel_2": "Introdução ao Direito Civil e LINDB",
          "topicos": [
            {
              "id": "civil_lindb",
              "nivel_3": "Lei de Introdução às Normas do Direito Brasileiro",
              "aliases": [
                "LINDB",
                "Aplicação da Lei",
                "Integração"
              ]
            },
            {
              "id": "civil_sistema_cc",
              "nivel_3": "Sistema do Código Civil e Princípios Gerais do Direito",
              "aliases": [
                "Unidade Sistemática",
                "Pluralidade de Fontes",
                "Codificação e Constitucionalização"
              ]
            },
            {
              "id": "civil_dir_subjetivo",
              "nivel_3": "Direito Subjetivo, Direito Potestativo e Faculdade Jurídica",
              "aliases": [
                "Direitos Imprescritíveis",
                "Relação e Situações Jurídicas",
                "Situações Existenciais e Patrimoniais"
              ]
            }
          ]
        },
        {
          "id": "civil_pessoas",
          "nivel_2": "Parte Geral: Das Pessoas",
          "topicos": [
            {
              "id": "civil_pes_naturais",
              "nivel_3": "Pessoas Naturais, Capacidade e Personalidade",
              "aliases": [
                "Direitos de Personalidade",
                "Liberdade, Autonomia e Novas Tecnologias"
              ]
            },
            {
              "id": "civil_pes_ausencia",
              "nivel_3": "Ausência e Domicílio",
              "aliases": []
            },
            {
              "id": "civil_pes_juridicas",
              "nivel_3": "Pessoas Jurídicas e Desconsideração da Personalidade",
              "aliases": [
                "Teorias da Desconsideração da Personalidade Jurídica"
              ]
            }
          ]
        },
        {
          "id": "civil_bens",
          "nivel_2": "Parte Geral: Dos Bens",
          "topicos": [
            {
              "id": "civil_bens_classificacao",
              "nivel_3": "Classificação dos Bens Considerados em Si Mesmos",
              "aliases": [
                "Móveis e Imóveis",
                "Fungíveis e Consumíveis",
                "Divisíveis",
                "Singulares e Coletivos"
              ]
            },
            {
              "id": "civil_bens_reciprocos",
              "nivel_3": "Bens Reciprocamente Considerados",
              "aliases": [
                "Principais e Acessórios",
                "Benfeitorias e Classificação"
              ]
            },
            {
              "id": "civil_bens_publicos",
              "nivel_3": "Bens Públicos",
              "aliases": [
                "Distinção dos Particulares"
              ]
            }
          ]
        },
        {
          "id": "civil_fatos_juridicos",
          "nivel_2": "Parte Geral: Fatos Jurídicos",
          "topicos": [
            {
              "id": "civil_fj_negocio_juridico",
              "nivel_3": "Teoria Geral do Negócio Jurídico e Atos Lícitos",
              "aliases": [
                "Pressupostos e Elementos de Existência",
                "Requisitos de Validade",
                "Inexistência, Invalidade e Ineficácia",
                "Interpretação e Prova"
              ]
            },
            {
              "id": "civil_fj_defeitos",
              "nivel_3": "Defeitos dos Atos e Negócios Jurídicos",
              "aliases": [
                "Erro",
                "Dolo",
                "Coação",
                "Estado de Perigo",
                "Lesão",
                "Fraude Contra Credores",
                "Simulação"
              ]
            },
            {
              "id": "civil_fj_nulidades",
              "nivel_3": "Invalidade do Negócio Jurídico (Nulidade e Anulabilidade)",
              "aliases": [
                "Negócio Nulo e Anulável",
                "Convalidação"
              ]
            },
            {
              "id": "civil_fj_ilicitos",
              "nivel_3": "Atos Ilícitos",
              "aliases": [
                "Requisitos de Configuração",
                "Excludentes do Ato Ilícito"
              ]
            },
            {
              "id": "civil_fj_prescricao_decadencia",
              "nivel_3": "Prescrição e Decadência",
              "aliases": [
                "Interrupção e Suspensão",
                "Termo Legal",
                "Prazos de Prescrição e Decadência",
                "Renúncia e Exceção"
              ]
            },
            {
              "id": "civil_fj_usura",
              "nivel_3": "Lei da Usura",
              "aliases": [
                "Decreto nº 22.626/1933"
              ]
            }
          ]
        },
        {
          "id": "civil_obrigacoes_atos_unilaterais",
          "nivel_2": "Direito das Obrigações e Atos Unilaterais",
          "topicos": [
            {
              "id": "civil_obrig_modalidades",
              "nivel_3": "Modalidades das Obrigações",
              "aliases": [
                "Obrigações de Dar, Fazer e Não Fazer",
                "Alternativas",
                "Divisíveis e Indivisíveis",
                "Solidariedade Ativa e Passiva"
              ]
            },
            {
              "id": "civil_obrig_transmissao",
              "nivel_3": "Transmissão das Obrigações",
              "aliases": []
            },
            {
              "id": "civil_obrig_adimplemento",
              "nivel_3": "Adimplemento, Inadimplemento e Extinção",
              "aliases": [
                "Mora"
              ]
            },
            {
              "id": "civil_atos_unilaterais",
              "nivel_3": "Atos Unilaterais",
              "aliases": [
                "Promessa de Recompensa",
                "Gestão de Negócios",
                "Pagamento Indevido",
                "Enriquecimento Sem Causa"
              ]
            }
          ]
        },
        {
          "id": "civil_contratos",
          "nivel_2": "Dos Contratos",
          "topicos": [
            {
              "id": "civil_cont_teoria_geral",
              "nivel_3": "Teoria Geral dos Contratos e Formação",
              "aliases": [
                "Autonomia da Vontade",
                "Função Social do Contrato",
                "Intervenção do Estado",
                "Teoria da Boa-Fé Objetiva"
              ]
            },
            {
              "id": "civil_cont_extincao_revisao",
              "nivel_3": "Revisão e Extinção do Contrato",
              "aliases": [
                "Distrato",
                "Cláusula Resolutiva",
                "Exceção do Contrato Não Cumprido",
                "Teoria da Imprevisão e Onerosidade Excessiva",
                "Teoria da Base do Negócio Jurídico"
              ]
            },
            {
              "id": "civil_cont_classificacao",
              "nivel_3": "Classificação dos Contratos e Regras Especiais",
              "aliases": [
                "Estipulação em Favor de Terceiro",
                "Promessa de Fato de Terceiro",
                "Vícios Redibitórios e Evicção",
                "Contratos Aleatórios",
                "Contrato Preliminar",
                "Contrato com Pessoa a Declarar/Nomear"
              ]
            },
            {
              "id": "civil_cont_especie",
              "nivel_3": "Contratos em Espécie (Típicos e Atípicos)",
              "aliases": [
                "Compra e Venda",
                "Troca ou Permuta",
                "Contrato Estimatório",
                "Doação",
                "Locação de Coisas",
                "Fiança",
                "Empréstimo (Comodato e Mútuo)",
                "Prestação de Serviço",
                "Empreitada",
                "Depósito",
                "Mandato",
                "Comissão, Agência, Distribuição e Corretagem",
                "Transporte",
                "Seguro e Constituição de Renda",
                "Transação"
              ]
            },
            {
              "id": "civil_cont_agrarios",
              "nivel_3": "Contratos Agrários",
              "aliases": [
                "Parceria e Arrendamento"
              ]
            },
            {
              "id": "civil_cont_liberdade_economica",
              "nivel_3": "Lei de Liberdade Econômica",
              "aliases": [
                "Lei nº 13.874/2019"
              ]
            }
          ]
        },
        {
          "id": "civil_responsabilidade",
          "nivel_2": "Responsabilidade Civil",
          "topicos": [
            {
              "id": "civil_resp_obrigacao",
              "nivel_3": "Responsabilidade Civil e Obrigação de Indenizar",
              "aliases": [
                "Novo Direito de Danos",
                "Imputação e Nexo Causal"
              ]
            }
          ]
        },
        {
          "id": "civil_reais",
          "nivel_2": "Direito das Coisas (Reais)",
          "topicos": [
            {
              "id": "civil_reais_posse",
              "nivel_3": "Posse",
              "aliases": [
                "Conceito e Classificação",
                "Detenção",
                "Aquisição, Efeitos e Perda",
                "Composse",
                "Proteção Possessória e Desforço Próprio",
                "Exceptio Proprietatis"
              ]
            },
            {
              "id": "civil_reais_propriedade",
              "nivel_3": "Propriedade",
              "aliases": [
                "Função Social",
                "Aquisição Originária e Derivada",
                "Tradição",
                "Perda da Propriedade",
                "Direitos de Vizinhança"
              ]
            },
            {
              "id": "civil_reais_usucapiao",
              "nivel_3": "Usucapião",
              "aliases": [
                "Espécies e Requisitos"
              ]
            },
            {
              "id": "civil_reais_alheias",
              "nivel_3": "Direitos Reais Sobre Coisas Alheias",
              "aliases": [
                "Superfície",
                "Servidões",
                "Usufruto",
                "Uso e Habitação",
                "Direito do Promitente Comprador"
              ]
            },
            {
              "id": "civil_reais_garantia",
              "nivel_3": "Direitos Reais de Garantia",
              "aliases": [
                "Penhor",
                "Hipoteca",
                "Anticrese",
                "Alienação Fiduciária"
              ]
            }
          ]
        },
        {
          "id": "civil_familia",
          "nivel_2": "Direito de Família",
          "topicos": [
            {
              "id": "civil_fam_casamento",
              "nivel_3": "Casamento e Dissolução",
              "aliases": [
                "Formas, Pressupostos e Capacidade",
                "Impedimentos e Causas Suspensivas",
                "Celebração, Provas, Nulidade e Eficácia",
                "Dissolução da Sociedade Conjugal",
                "Separação e Divórcio"
              ]
            },
            {
              "id": "civil_fam_uniao_estavel",
              "nivel_3": "União Estável, Concubinato e União Homoafetiva",
              "aliases": [
                "Conceito, Condições e Impedimentos",
                "Regime Patrimonial"
              ]
            },
            {
              "id": "civil_fam_parentesco",
              "nivel_3": "Relação de Parentesco e Filiação",
              "aliases": [
                "Reconhecimento de Filhos e Adoção",
                "Poder Familiar",
                "Investigação de Paternidade",
                "Bases Socioafetivas e Posse de Estado de Filho",
                "Descendência Genética"
              ]
            },
            {
              "id": "civil_fam_guarda_tutela",
              "nivel_3": "Guarda, Tutela e Curatela",
              "aliases": [
                "Guarda Compartilhada (Lei nº 13.058/2014)",
                "Direito Protetivo"
              ]
            },
            {
              "id": "civil_fam_patrimonial",
              "nivel_3": "Direitos Patrimoniais e Alimentos",
              "aliases": [
                "Regimes de Bens no Casamento",
                "Usufruto e Administração dos Bens dos Filhos",
                "Alimentos (Pressupostos e Critérios)",
                "Bem de Família"
              ]
            },
            {
              "id": "civil_fam_violencia",
              "nivel_3": "Medidas Protetivas à Violência Doméstica",
              "aliases": [
                "Lei nº 11.340/2006 (Lei Maria da Penha)"
              ]
            }
          ]
        },
        {
          "id": "civil_sucessoes",
          "nivel_2": "Direito das Sucessões",
          "topicos": [
            {
              "id": "civil_suc_geral",
              "nivel_3": "Sucessão em Geral e Vocação Hereditária",
              "aliases": [
                "Herança e Administração",
                "Aceitação, Renúncia e Exclusão",
                "Herança Jacente e Petição de Herança",
                "Disposições Transitórias (Arts. 2.028 a 2.046 do CC)"
              ]
            },
            {
              "id": "civil_suc_legitima",
              "nivel_3": "Sucessão Legítima",
              "aliases": [
                "Ordem de Vocação Hereditária",
                "Herdeiros Necessários",
                "Direito de Representação"
              ]
            },
            {
              "id": "civil_suc_testamentaria",
              "nivel_3": "Sucessão Testamentária",
              "aliases": [
                "Testamentos (Público, Cerrado, Particular e Especiais)",
                "Codicilo e Legados",
                "Direito de Acrescer e Substituições",
                "Deserdação e Redução",
                "Revogação e Rompimento"
              ]
            },
            {
              "id": "civil_suc_inventario",
              "nivel_3": "Inventário e Partilha",
              "aliases": [
                "Sonegados",
                "Pagamento de Dívidas",
                "Colação de Bens",
                "Garantia dos Quinhões e Anulação"
              ]
            }
          ]
        },
        {
          "id": "civil_registros_publicos",
          "nivel_2": "Registros Públicos",
          "topicos": [
            {
              "id": "civil_reg_6015",
              "nivel_3": "Registros Públicos (Lei nº 6.015/1973 e Provimento CNJ nº 149/2023)",
              "aliases": [
                "Registro de Imóveis e Averbações",
                "Registro de Títulos e Documentos",
                "Registro Civil das Pessoas Naturais"
              ]
            },
            {
              "id": "civil_reg_notariais",
              "nivel_3": "Serviços Notariais e Registros (Lei nº 8.935/1994)",
              "aliases": [
                "Tabelionatos de Notas e de Protestos Cambiais",
                "Natureza dos Serviços e Fé Pública"
              ]
            },
            {
              "id": "civil_reg_serp",
              "nivel_3": "Sistema Eletrônico dos Registros Públicos",
              "aliases": [
                "Lei nº 14.382/2022"
              ]
            }
          ]
        },
        {
          "id": "civil_legislacao_especial",
          "nivel_2": "Legislação Civil Especial",
          "topicos": [
            {
              "id": "civil_esp_imobiliario",
              "nivel_3": "Legislação Imobiliária e Financeira",
              "aliases": [
                "Alienação Fiduciária (Decreto-Lei nº 911/1969 e Lei nº 9.514/1997)",
                "Condomínio e Incorporações (Lei nº 4.591/1964)",
                "Lei nº 10.931/2004",
                "Parcelamento do Solo Urbano (Lei nº 6.766/1979)"
              ]
            },
            {
              "id": "civil_esp_locacao",
              "nivel_3": "Locação de Imóveis Urbanos",
              "aliases": [
                "Lei nº 8.245/1991"
              ]
            },
            {
              "id": "civil_esp_estatutos",
              "nivel_3": "Estatutos e Proteção de Vulneráveis",
              "aliases": [
                "Estatuto da Pessoa Idosa (Lei nº 10.741/2003)",
                "Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015)"
              ]
            },
            {
              "id": "civil_esp_tecnologia",
              "nivel_3": "Direitos Digitais e Novas Tecnologias",
              "aliases": [
                "Lei Geral de Proteção de Dados - LGPD (Lei nº 13.709/2018)",
                "Marco Civil da Internet (Lei nº 12.965/2014)",
                "Resolução CNJ nº 452/2022"
              ]
            },
            {
              "id": "civil_esp_rjet",
              "nivel_3": "Regime Jurídico Emergencial e Transitório",
              "aliases": [
                "RJET (Lei nº 14.010/2020)"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "proc_civil",
      "nivel_1": "Direito Processual Civil",
      "divisoes": [
        {
          "id": "pc_fundamentos",
          "nivel_2": "Normas Fundamentais, Jurisdição e Ação",
          "topicos": [
            {
              "id": "pc_fund_normas",
              "nivel_3": "Normas Processuais Fundamentais e Aplicação da Lei",
              "aliases": [
                "Boa-fé, eficiência e colaboração",
                "Meios adequados de resolução de conflitos",
                "Conciliação, Mediação e Arbitragem"
              ]
            },
            {
              "id": "pc_fund_jurisdicao",
              "nivel_3": "Jurisdição e Competência",
              "aliases": [
                "Incompetência absoluta e relativa",
                "Modificação da competência",
                "Cooperação nacional e internacional"
              ]
            },
            {
              "id": "pc_fund_acao_processo",
              "nivel_3": "Ação e Processo",
              "aliases": [
                "Condições da ação",
                "Pressupostos processuais",
                "Elementos da demanda"
              ]
            }
          ]
        },
        {
          "id": "pc_sujeitos",
          "nivel_2": "Sujeitos do Processo",
          "topicos": [
            {
              "id": "pc_suj_partes",
              "nivel_3": "Partes, Procuradores e Gratuidade da Justiça",
              "aliases": [
                "Capacidade processual",
                "Deveres processuais e litigância de má-fé",
                "Honorários de sucumbência e despesas",
                "Sucessão e substituição"
              ]
            },
            {
              "id": "pc_suj_litis_terceiros",
              "nivel_3": "Litisconsórcio e Intervenção de Terceiros",
              "aliases": [
                "Assistência",
                "Denunciação da lide",
                "Chamamento ao processo",
                "Incidente de desconsideração da personalidade jurídica (IDPJ)",
                "Amicus Curiae"
              ]
            },
            {
              "id": "pc_suj_juiz_aux",
              "nivel_3": "Juiz e Auxiliares da Justiça",
              "aliases": [
                "Poderes, deveres e responsabilidades do Juiz",
                "Impedimento e suspeição",
                "Perito e Oficial de Justiça"
              ]
            },
            {
              "id": "pc_suj_funcoes_essenciais",
              "nivel_3": "Funções Essenciais à Administração da Justiça",
              "aliases": [
                "Ministério Público",
                "Advocacia Pública",
                "Defensoria Pública"
              ]
            }
          ]
        },
        {
          "id": "pc_atos",
          "nivel_2": "Atos Processuais",
          "topicos": [
            {
              "id": "pc_atos_teoria",
              "nivel_3": "Teoria dos Atos e Negócios Processuais",
              "aliases": [
                "Forma, tempo e lugar",
                "Negócio jurídico processual",
                "Processo eletrônico",
                "Valor da causa"
              ]
            },
            {
              "id": "pc_atos_comunicacao",
              "nivel_3": "Comunicação dos Atos Processuais",
              "aliases": [
                "Citação e intimação",
                "Citação real e ficta",
                "Cartas precatória e rogatória"
              ]
            },
            {
              "id": "pc_atos_prazos",
              "nivel_3": "Prazos Processuais e Preclusão",
              "aliases": [
                "Preclusão temporal, lógica e consumativa"
              ]
            },
            {
              "id": "pc_atos_nulidades",
              "nivel_3": "Invalidades e Nulidades Processuais",
              "aliases": [
                "Mera irregularidade, anulabilidade e nulidade",
                "Vícios sanáveis e insanáveis"
              ]
            }
          ]
        },
        {
          "id": "pc_tutelas",
          "nivel_2": "Tutelas Provisórias",
          "topicos": [
            {
              "id": "pc_tutela_urgencia",
              "nivel_3": "Tutela de Urgência (Antecipada e Cautelar)",
              "aliases": [
                "Requisitos e procedimentalização",
                "Estabilização da tutela antecipada antecedente",
                "Tutela inibitória e remoção do ilícito"
              ]
            },
            {
              "id": "pc_tutela_evidencia",
              "nivel_3": "Tutela de Evidência",
              "aliases": [
                "Cabimento e requisitos"
              ]
            }
          ]
        },
        {
          "id": "pc_procedimento_comum",
          "nivel_2": "Procedimento Comum",
          "topicos": [
            {
              "id": "pc_comum_peticao",
              "nivel_3": "Petição Inicial e Formação do Processo",
              "aliases": [
                "Requisitos, emenda e aditamento",
                "Inépcia e indeferimento",
                "Improcedência liminar do pedido"
              ]
            },
            {
              "id": "pc_comum_resposta",
              "nivel_3": "Resposta do Réu e Revelia",
              "aliases": [
                "Contestação",
                "Reconvenção",
                "Impugnação ao valor da causa",
                "Teoria da asserção"
              ]
            },
            {
              "id": "pc_comum_saneamento",
              "nivel_3": "Providências Preliminares e Saneamento",
              "aliases": [
                "Julgamento conforme o estado do processo",
                "Julgamento antecipado do mérito",
                "Saneamento e organização do processo"
              ]
            },
            {
              "id": "pc_comum_provas",
              "nivel_3": "Provas e Audiência de Instrução e Julgamento",
              "aliases": [
                "Teoria geral e ônus da prova",
                "Distribuição estática e dinâmica",
                "Provas típicas e atípicas",
                "Prova ilícita",
                "Valoração e standards de prova"
              ]
            },
            {
              "id": "pc_comum_sentenca",
              "nivel_3": "Sentença e Coisa Julgada",
              "aliases": [
                "Elementos e fundamentação analítica",
                "Remessa obrigatória",
                "Eficácias da coisa julgada e relativização",
                "Liquidação de sentença"
              ]
            },
            {
              "id": "pc_comum_cumprimento",
              "nivel_3": "Cumprimento de Sentença",
              "aliases": [
                "Obrigação de pagar quantia certa",
                "Obrigação de fazer, não fazer e entregar coisa",
                "Prestações de alimentos",
                "Cumprimento contra a Fazenda Pública",
                "Impugnação"
              ]
            }
          ]
        },
        {
          "id": "pc_especiais",
          "nivel_2": "Procedimentos Especiais",
          "topicos": [
            {
              "id": "pc_esp_contenciosos",
              "nivel_3": "Procedimentos de Jurisdição Contenciosa",
              "aliases": [
                "Ação de consignação em pagamento",
                "Ação de exigir contas",
                "Ações possessórias",
                "Inventário e partilha",
                "Ações de família",
                "Embargos de terceiro",
                "Ação monitória",
                "Dissolução parcial de sociedade"
              ]
            },
            {
              "id": "pc_esp_voluntarios",
              "nivel_3": "Procedimentos de Jurisdição Voluntária",
              "aliases": [
                "Alienação judicial",
                "Divórcio e separação consensuais",
                "Testamentos e codicilos",
                "Interdição e tutela",
                "Herança jacente"
              ]
            }
          ]
        },
        {
          "id": "pc_execucao",
          "nivel_2": "Processo de Execução",
          "topicos": [
            {
              "id": "pc_exec_teoria",
              "nivel_3": "Disposições Gerais e Títulos Executivos",
              "aliases": [
                "Requisitos da execução",
                "Responsabilidade patrimonial",
                "Fraude à execução e Fraude contra credores"
              ]
            },
            {
              "id": "pc_exec_especies",
              "nivel_3": "Espécies de Execução e Atos de Expropriação",
              "aliases": [
                "Entrega de coisa",
                "Obrigações de fazer e não fazer",
                "Quantia certa",
                "Contra a Fazenda Pública",
                "Execução de alimentos",
                "Penhora, Adjudicação e Alienação"
              ]
            },
            {
              "id": "pc_exec_defesas",
              "nivel_3": "Defesas, Suspensão e Extinção",
              "aliases": [
                "Embargos à execução",
                "Exceção de pré-executividade",
                "Extinção do processo de execução"
              ]
            }
          ]
        },
        {
          "id": "pc_tribunais",
          "nivel_2": "Processos nos Tribunais e Recursos",
          "topicos": [
            {
              "id": "pc_trib_acoes_originarias",
              "nivel_3": "Ações Originárias e Incidentes",
              "aliases": [
                "Ação rescisória",
                "Reclamação constitucional",
                "Conflito de competência",
                "Homologação de sentença estrangeira"
              ]
            },
            {
              "id": "pc_trib_precedentes",
              "nivel_3": "Teoria dos Precedentes e Casos Repetitivos",
              "aliases": [
                "Incidente de resolução de demandas repetitivas (IRDR)",
                "Incidente de assunção de competência (IAC)",
                "Ratio decidendi, obiter dictum, distinguishing e overruling",
                "Súmulas vinculantes"
              ]
            },
            {
              "id": "pc_trib_recursos_geral",
              "nivel_3": "Teoria Geral dos Recursos",
              "aliases": [
                "Normas fundamentais, classificação e efeitos",
                "Juízo de admissibilidade e de mérito",
                "Sucedâneos recursais"
              ]
            },
            {
              "id": "pc_trib_recursos_especie",
              "nivel_3": "Recursos em Espécie",
              "aliases": [
                "Apelação",
                "Agravo de instrumento e interno",
                "Embargos de declaração e de divergência",
                "Recurso Ordinário, Especial (REsp) e Extraordinário (RE)",
                "Repercussão geral e recursos repetitivos"
              ]
            }
          ]
        },
        {
          "id": "pc_legislacao_esparsa",
          "nivel_2": "Legislação Processual Esparsa",
          "topicos": [
            {
              "id": "pc_esp_microssistema_coletivo",
              "nivel_3": "Microssistema de Tutela Coletiva e Ações Constitucionais",
              "aliases": [
                "Ação Civil Pública (Lei 7.347/85)",
                "Ação Popular (Lei 4.717/65)",
                "Improbidade Administrativa (Lei 8.429/92)",
                "Mandado de Segurança (Lei 12.016/09)",
                "Habeas Data (Lei 9.507/97)"
              ]
            },
            {
              "id": "pc_esp_fazenda",
              "nivel_3": "Fazenda Pública em Juízo",
              "aliases": [
                "Execução Fiscal (Lei 6.830/80)",
                "Desapropriação (DL 3.365/41)",
                "Suspensão de liminares e tutela antecipada (Leis 8.437/92 e 9.494/97)",
                "Prescrição contra a Fazenda (Dec. 20.910/32)"
              ]
            },
            {
              "id": "pc_esp_juizados",
              "nivel_3": "Juizados Especiais",
              "aliases": [
                "Juizados Especiais Estaduais e Federais (Leis 9.099/95 e 10.259/01)",
                "Juizado Especial da Fazenda Pública (Lei 12.153/09)"
              ]
            },
            {
              "id": "pc_esp_diversas",
              "nivel_3": "Outras Leis Processuais e Direitos Específicos",
              "aliases": [
                "Bem de Família (Lei 8.009/90)",
                "Assistência Judiciária (Lei 1.060/50)",
                "Alimentos (Lei 5.478/68 e Lei 11.804/08)",
                "Investigação de Paternidade (Lei 8.560/92)",
                "Mediação (Lei 13.140/15) e Arbitragem (Lei 9.307/96)",
                "Registros Públicos (Lei 6.015/73)"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "consumidor",
      "nivel_1": "Direito do Consumidor",
      "divisoes": [
        {
          "id": "cons_fundamentos_relacao",
          "nivel_2": "Fundamentos e Relação de Consumo",
          "topicos": [
            {
              "id": "cons_fundamentos",
              "nivel_3": "Fundamentos Constitucionais e Infraconstitucionais",
              "aliases": [
                "Campo de Aplicação do CDC"
              ]
            },
            {
              "id": "cons_relacao",
              "nivel_3": "Relação de Consumo",
              "aliases": [
                "Conceitos de Consumidor e Fornecedor",
                "Conceitos de Produto e Serviço",
                "Correntes e Posicionamento do STJ"
              ]
            },
            {
              "id": "cons_principios",
              "nivel_3": "Principiologia e Direitos Básicos no CDC",
              "aliases": [
                "Boa-fé Objetiva",
                "Inversão do Ônus da Prova"
              ]
            }
          ]
        },
        {
          "id": "cons_responsabilidade",
          "nivel_2": "Responsabilidade e Prazos",
          "topicos": [
            {
              "id": "cons_resp_fato_vicio",
              "nivel_3": "Responsabilidade pelo Fato e pelo Vício",
              "aliases": [
                "Fato do Produto e do Serviço",
                "Vício do Produto e do Serviço"
              ]
            },
            {
              "id": "cons_resp_prazos",
              "nivel_3": "Prazos, Garantias, Decadência e Prescrição",
              "aliases": [
                "Garantia Contratual e Legal"
              ]
            },
            {
              "id": "cons_resp_desconsideracao",
              "nivel_3": "Desconsideração da Personalidade Jurídica no CDC",
              "aliases": []
            }
          ]
        },
        {
          "id": "cons_praticas_contratos",
          "nivel_2": "Práticas Comerciais e Proteção Contratual",
          "topicos": [
            {
              "id": "cons_praticas_oferta",
              "nivel_3": "Oferta, Publicidade e Práticas Comerciais Abusivas",
              "aliases": [
                "Cobrança de Dívidas",
                "Cadastros de Inadimplentes"
              ]
            },
            {
              "id": "cons_comercio_eletronico",
              "nivel_3": "Contratação no Comércio Eletrônico",
              "aliases": [
                "Decreto nº 7.962/2013"
              ]
            },
            {
              "id": "cons_protecao_contratual",
              "nivel_3": "Proteção Contratual e Cláusulas Abusivas",
              "aliases": [
                "Contratos de Adesão",
                "Financiamentos",
                "Ações de Revisão de Contrato"
              ]
            },
            {
              "id": "cons_superendividamento",
              "nivel_3": "Prevenção e Tratamento do Superendividamento",
              "aliases": [
                "Conciliação no Superendividamento"
              ]
            }
          ]
        },
        {
          "id": "cons_defesa_sancoes",
          "nivel_2": "Defesa do Consumidor e Sanções",
          "topicos": [
            {
              "id": "cons_defesa_sindec",
              "nivel_3": "Sanções Administrativas e Sistema Nacional de Defesa do Consumidor",
              "aliases": []
            },
            {
              "id": "cons_defesa_juizo",
              "nivel_3": "Defesa dos Direitos do Consumidor em Juízo",
              "aliases": [
                "Ações Coletivas em Matéria de Consumo",
                "Interesses Difusos, Coletivos e Individuais Homogêneos"
              ]
            }
          ]
        },
        {
          "id": "cons_legislacao_especial",
          "nivel_2": "Legislação Especial e Setorial",
          "topicos": [
            {
              "id": "cons_leg_cadastro_positivo",
              "nivel_3": "Lei do Cadastro Positivo",
              "aliases": [
                "Lei nº 12.414/2011",
                "Decreto nº 9.936/2019"
              ]
            },
            {
              "id": "cons_leg_telecom",
              "nivel_3": "Regulamento de Serviços de Telecomunicações",
              "aliases": [
                "Resolução Anatel nº 765/2023"
              ]
            },
            {
              "id": "cons_leg_energia",
              "nivel_3": "Regras de Prestação de Serviço de Energia Elétrica",
              "aliases": [
                "Resolução Normativa Aneel nº 1.000/2021"
              ]
            },
            {
              "id": "cons_leg_saude",
              "nivel_3": "Planos e Seguros Privados de Assistência à Saúde",
              "aliases": [
                "Lei nº 9.656/1998"
              ]
            }
          ]
        },
        {
          "id": "cons_jurisprudencia",
          "nivel_2": "Jurisprudência dos Tribunais Superiores",
          "topicos": [
            {
              "id": "cons_jur_stf_stj",
              "nivel_3": "Jurisprudência, Precedentes e Súmulas do STF e STJ em Matéria de Consumo",
              "aliases": []
            }
          ]
        }
      ]
    },
    {
      "id": "crianca_adolescente",
      "nivel_1": "Direito da Criança e do Adolescente",
      "divisoes": [
        {
          "id": "eca_fundamentos",
          "nivel_2": "Fundamentos e Sistema de Proteção Integral",
          "topicos": [
            {
              "id": "eca_constituicao",
              "nivel_3": "Constituição Federal de 1988",
              "aliases": [
                "Proteção Integral e Prioridade Absoluta",
                "Direitos da Infância e Juventude"
              ]
            },
            {
              "id": "eca_estatuto",
              "nivel_3": "Estatuto da Criança e do Adolescente (ECA)",
              "aliases": [
                "Lei nº 8.069/1990"
              ]
            },
            {
              "id": "eca_primeira_infancia",
              "nivel_3": "Marco Legal da Primeira Infância",
              "aliases": [
                "Lei nº 13.257/2016"
              ]
            }
          ]
        },
        {
          "id": "eca_sistema_garantias",
          "nivel_2": "Sistema de Garantia de Direitos e Assistência Social",
          "topicos": [
            {
              "id": "eca_sgdca",
              "nivel_3": "Sistema de Garantia dos Direitos da Criança e do Adolescente",
              "aliases": [
                "Resoluções Conanda nº 113/2006 e nº 117/2006"
              ]
            },
            {
              "id": "eca_conselho_tutelar",
              "nivel_3": "Conselho Tutelar",
              "aliases": [
                "Resolução Conanda nº 231/2022"
              ]
            },
            {
              "id": "eca_assistencia_social",
              "nivel_3": "Políticas e Normativas de Assistência Social",
              "aliases": [
                "Lei Orgânica da Assistência Social - LOAS (Lei nº 8.742/1993)",
                "Política Nacional de Assistência Social (Resolução CNAS nº 145/2004)",
                "Tipificação Nacional de Serviços Socioassistenciais (Resolução CNAS nº 109/2009)"
              ]
            }
          ]
        },
        {
          "id": "eca_sinase",
          "nivel_2": "Sistema Nacional de Atendimento Socioeducativo (SINASE)",
          "topicos": [
            {
              "id": "eca_sinase_lei",
              "nivel_3": "Lei do SINASE",
              "aliases": [
                "Lei nº 12.594/2012"
              ]
            },
            {
              "id": "eca_sinase_judiciario",
              "nivel_3": "Atendimento Socioeducativo no Judiciário",
              "aliases": [
                "Resolução CNJ nº 165/2012",
                "Resolução Conanda nº 169/2014"
              ]
            }
          ]
        },
        {
          "id": "eca_protecao_violencia",
          "nivel_2": "Prevenção à Violência e Escuta Especializada",
          "topicos": [
            {
              "id": "eca_escuta",
              "nivel_3": "Sistema de Garantia de Direitos da Vítima ou Testemunha de Violência",
              "aliases": [
                "Lei nº 13.431/2017",
                "Decreto nº 9.603/2018",
                "Escuta Especializada e Depoimento Especial"
              ]
            },
            {
              "id": "eca_henry_borel",
              "nivel_3": "Prevenção e Enfrentamento da Violência Doméstica e Familiar (Lei Henry Borel)",
              "aliases": [
                "Lei nº 14.344/2022"
              ]
            }
          ]
        },
        {
          "id": "eca_justica_normativas",
          "nivel_2": "Proteção Judicial, Atos do CNJ e Saúde Mental",
          "topicos": [
            {
              "id": "eca_cnj_viagem",
              "nivel_3": "Autorização de Viagem",
              "aliases": [
                "Resolução CNJ nº 295/2019"
              ]
            },
            {
              "id": "eca_cnj_audiencias",
              "nivel_3": "Audiências Concentradas e Outros Atos Normativos",
              "aliases": [
                "Recomendação CNJ nº 98/2021",
                "Atos Normativos do CNJ"
              ]
            },
            {
              "id": "eca_saude_mental",
              "nivel_3": "Proteção e Direitos de Crianças e Adolescentes com Transtornos Mentais",
              "aliases": [
                "Lei nº 10.216/2001"
              ]
            }
          ]
        },
        {
          "id": "eca_internacional",
          "nivel_2": "Normativa Internacional",
          "topicos": [
            {
              "id": "eca_int_convencoes",
              "nivel_3": "Declarações e Convenções da ONU",
              "aliases": [
                "Declaração Universal dos Direitos da Criança",
                "Convenção das Nações Unidas sobre os Direitos da Criança e do Adolescente"
              ]
            },
            {
              "id": "eca_int_haia",
              "nivel_3": "Convenção de Haia",
              "aliases": [
                "Cooperação em Matéria de Adoção"
              ]
            },
            {
              "id": "eca_int_beijing",
              "nivel_3": "Regras de Beijing",
              "aliases": [
                "Regras Mínimas das Nações Unidas para a Administração da Justiça Juvenil"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "penal",
      "nivel_1": "Direito Penal",
      "divisoes": [
        {
          "id": "penal_lei",
          "nivel_2": "Parte Geral: Teoria da Lei Penal",
          "topicos": [
            {
              "id": "penal_lei_tempo",
              "nivel_3": "Lei Penal no Tempo",
              "aliases": [
                "Novatio Legis",
                "Abolitio Criminis e Irretroatividade"
              ]
            },
            {
              "id": "top_1779236024381",
              "nivel_3": "Princípios Penais",
              "aliases": [
                "Legalidade",
                "Intervenção Mínima e Insignificância"
              ]
            },
            {
              "id": "top_1779236030436",
              "nivel_3": "Conflito Aparente de Normas",
              "aliases": [
                "Especialidade",
                "Subsidiariedade",
                "Consunção"
              ]
            },
            {
              "id": "top_1779236060268",
              "nivel_3": "Lei Penal no Espaço",
              "aliases": [
                "Territorialidade e Extraterritorialidade"
              ]
            }
          ]
        },
        {
          "id": "penal_crime",
          "nivel_2": "Parte Geral: Teoria do Crime",
          "topicos": [
            {
              "id": "penal_crime_fato",
              "nivel_3": "Fato Típico (Resultado, Nexo Causal e Teoria da Imputação Objetiva)"
            },
            {
              "id": "penal_crime_iter",
              "nivel_3": "Iter Criminis (Consumação, Tentativa e Desistências)",
              "aliases": [
                "Arrependimento Eficaz",
                "Crime Impossível"
              ]
            },
            {
              "id": "penal_crime_culpabilidade",
              "nivel_3": "Culpabilidade e Causas de Exclusão (Imputabilidade)",
              "aliases": [
                "Potencial Consciência da Ilicitude",
                "Inexigibilidade de Conduta"
              ]
            },
            {
              "id": "penal_crime_erro",
              "nivel_3": "Teoria do Erro (Erro de Tipo e Erro de Proibição)",
              "aliases": [
                "Descriminantes Putativas",
                "Erro na Execução"
              ]
            },
            {
              "id": "penal_crime_concurso",
              "nivel_3": "Concurso de Pessoas (Autoria e Participação)",
              "aliases": [
                "Coautoria",
                "Domínio do Fato"
              ]
            },
            {
              "id": "top_1779236098180",
              "nivel_3": "Fato Típico (Conduta)",
              "aliases": [
                "Dolo",
                "Culpa e Preterdolo"
              ]
            },
            {
              "id": "top_1779236142204",
              "nivel_3": "Fato Típico (Tipicidade Formal e Conglobante)"
            },
            {
              "id": "top_1779236202996",
              "nivel_3": "Excludentes de Ilicitude (Estrito Cumprimento do Dever e Exercício Regular de Direito)"
            },
            {
              "id": "top_1779236289914",
              "nivel_3": "Excludentes de Ilicitude (Legítima Defesa e Estado de Necessidade)"
            }
          ]
        },
        {
          "id": "penal_pena",
          "nivel_2": "Parte Geral: Teoria da Pena",
          "topicos": [
            {
              "id": "penal_pena_especies",
              "nivel_3": "Penas em Espécie",
              "aliases": [
                "PPL",
                "PRD",
                "Multa"
              ]
            },
            {
              "id": "penal_pena_sursis",
              "nivel_3": "Suspensão da Pena (Sursis)",
              "aliases": [
                "Confisco",
                "Reabilitação"
              ]
            },
            {
              "id": "penal_pena_medida",
              "nivel_3": "Medidas de Segurança",
              "aliases": [
                "Internação",
                "Tratamento Ambulatorial"
              ]
            },
            {
              "id": "top_1779236332386",
              "nivel_3": "Dosimetria (Circunstâncias Judiciais)"
            },
            {
              "id": "top_1779236349075",
              "nivel_3": "Dosimetria (Agravantes/Atenuantes)"
            },
            {
              "id": "top_1779236362482",
              "nivel_3": "Dosimetria (Causas de Aumento)"
            },
            {
              "id": "top_1779236393569",
              "nivel_3": "Concurso de Crimes"
            },
            {
              "id": "top_1779236404865",
              "nivel_3": "Penas Restritivas de Direito (PRD) e Substituição"
            },
            {
              "id": "top_1779236427801",
              "nivel_3": "Regimes de Cumprimento de Pena"
            },
            {
              "id": "top_1779236446833",
              "nivel_3": "Efeitos da Condenação"
            }
          ]
        },
        {
          "id": "penal_punibilidade",
          "nivel_2": "Parte Geral: Punibilidade",
          "topicos": [
            {
              "id": "penal_pun_extincao",
              "nivel_3": "Extinção da Punibilidade e Escusas Absolutórias",
              "aliases": [
                "Anistia",
                "Graça",
                "Indulto",
                "Perdão"
              ]
            },
            {
              "id": "penal_pun_prescricao",
              "nivel_3": "Prescrição e Decadência",
              "aliases": [
                "Prescrição da Pretensão Punitiva",
                "Causas Interruptivas"
              ]
            }
          ]
        },
        {
          "id": "penal_pe_pessoa",
          "nivel_2": "Parte Especial: Crimes contra a Pessoa",
          "topicos": [
            {
              "id": "top_1779240455769",
              "nivel_3": "Lesões Corporais"
            },
            {
              "id": "top_1779240456697",
              "nivel_3": "Crimes contra a Honra"
            },
            {
              "id": "top_1779240457337",
              "nivel_3": "Crimes contra a Liberdade"
            },
            {
              "id": "top_1779240488376",
              "nivel_3": "Crimes contra a Vida"
            }
          ]
        },
        {
          "id": "penal_pe_patrimonio",
          "nivel_2": "Parte Especial: Patrimônio e Propriedade Imaterial",
          "topicos": [
            {
              "id": "penal_pe_pat_estelionato",
              "nivel_3": "Apropriação Indébita, Estelionato e Receptação",
              "aliases": [
                "Dano",
                "Fraude"
              ]
            },
            {
              "id": "penal_pe_pat_imaterial",
              "nivel_3": "Crimes contra a Propriedade Imaterial (Direitos Autorais)",
              "aliases": [
                "Pirataria",
                "Patentes"
              ]
            },
            {
              "id": "top_1779236472145",
              "nivel_3": "Furto",
              "aliases": [
                "Simples",
                "Qualificado e de Coisa Comum"
              ]
            },
            {
              "id": "top_1779236480185",
              "nivel_3": "Roubo",
              "aliases": [
                "Próprio",
                "Impróprio e Majorado"
              ]
            },
            {
              "id": "top_1779236489225",
              "nivel_3": "Extorsão e Extorsão Mediante Sequestro"
            }
          ]
        },
        {
          "id": "penal_pe_dignidade",
          "nivel_2": "Parte Especial: Dignidade Sexual e Família",
          "topicos": [
            {
              "id": "penal_pe_dig_estupro",
              "nivel_3": "Estupro, Assédio e Corrupção de Menores",
              "aliases": [
                "Estupro de Vulnerável",
                "Importunação Sexual"
              ]
            },
            {
              "id": "penal_pe_dig_prost",
              "nivel_3": "Favorecimento da Prostituição e Ultraje Público",
              "aliases": [
                "Rufianismo",
                "Ato Obsceno"
              ]
            },
            {
              "id": "penal_pe_dig_familia",
              "nivel_3": "Crimes contra a Família (Casamento, Filiação e Assistência)",
              "aliases": [
                "Bigamia",
                "Abandono Material"
              ]
            }
          ]
        },
        {
          "id": "penal_pe_adm_estado",
          "nivel_2": "Parte Especial: Administração Pública",
          "topicos": [
            {
              "id": "penal_pe_adm_func",
              "nivel_3": "Crimes praticados por Funcionário Público",
              "aliases": [
                "Peculato",
                "Corrupção Passiva",
                "Prevaricação"
              ]
            },
            {
              "id": "penal_pe_adm_part",
              "nivel_3": "Crimes de Particular e contra a Administração da Justiça",
              "aliases": [
                "Corrupção Ativa",
                "Falso Testemunho",
                "Desacato"
              ]
            },
            {
              "id": "top_1779236600728",
              "nivel_3": "Corrupção Passiva e Prevaricação"
            },
            {
              "id": "top_1779236618064",
              "nivel_3": "Peculato e Concussão"
            }
          ]
        },
        {
          "id": "penal_pe_coletividade",
          "nivel_2": "Parte Especial: Crimes contra a Coletividade",
          "topicos": [
            {
              "id": "penal_pe_col_paz",
              "nivel_3": "Incolumidade, Paz Pública e Sentimento Religioso",
              "aliases": [
                "Incêndio",
                "Associação Criminosa",
                "Vilipêndio"
              ]
            },
            {
              "id": "penal_pe_col_fe",
              "nivel_3": "Crimes contra a Fé Pública (Falsidades e Moeda Falsa)",
              "aliases": [
                "Falsidade Ideológica",
                "Uso de Documento Falso"
              ]
            },
            {
              "id": "penal_pe_col_trab",
              "nivel_3": "Crimes contra a Organização do Trabalho",
              "aliases": [
                "Atentado contra Liberdade de Trabalho"
              ]
            }
          ]
        },
        {
          "id": "penal_especial",
          "nivel_2": "Legislação Penal Especial",
          "topicos": [
            {
              "id": "penal_esp_drogas",
              "nivel_3": "Lei de Drogas (Lei 11.343/06)",
              "aliases": [
                "Tráfico",
                "Associação para o Tráfico"
              ]
            },
            {
              "id": "penal_esp_armas",
              "nivel_3": "Desarmamento, Crimes Hediondos e Tortura",
              "aliases": [
                "Estatuto do Desarmamento",
                "Lei 8.072/90"
              ]
            },
            {
              "id": "penal_esp_vulneraveis",
              "nivel_3": "Crimes contra Grupos Vulneráveis (Maria da Penha, Idoso, Racismo, ECA, Henry Borel)",
              "aliases": [
                "Lei 11.340/06",
                "Preconceito e Discriminação (Lei 7.716/89)",
                "Homofobia e Transfobia",
                "Estatuto do Idoso (Crimes)",
                "Lei Henry Borel (Lei 14.344/22)"
              ]
            },
            {
              "id": "penal_esp_contravencoes",
              "nivel_3": "Contravenções Penais e Crimes de Responsabilidade",
              "aliases": [
                "Lei das Contravenções Penais (DL 3.688/41)",
                "Crimes de Prefeitos (DL 201/67)",
                "Vias de Fato",
                "Perturbação do Sossego"
              ]
            },
            {
              "id": "penal_esp_org",
              "nivel_3": "Organização Criminosa e Lavagem de Capitais",
              "aliases": [
                "Lei 12.850/13",
                "Delação Premiada",
                "Ocultação de Bens"
              ]
            },
            {
              "id": "penal_esp_transito",
              "nivel_3": "Trânsito, Ambiental e Crimes Econômicos/Tributários",
              "aliases": [
                "CTB",
                "Crimes Ambientais",
                "Sonegação"
              ]
            },
            {
              "id": "penal_esp_abuso",
              "nivel_3": "Abuso de Autoridade (Lei 13.869/19) e Licitações",
              "aliases": [
                "Lei de Licitações"
              ]
            }
          ]
        },
        {
          "id": "div_1779236538305",
          "nivel_2": "Parte Especial: Crime contra o Estado Democrático",
          "topicos": [
            {
              "id": "top_1779236578978",
              "nivel_3": "Crimes contra o Estado Democrático de Direito (Título XII)",
              "aliases": [
                "Golpe de Estado",
                "Abolição Violenta"
              ]
            }
          ]
        },
        {
          "id": "div_1779236676904",
          "nivel_2": "Legislação Penal Especial",
          "topicos": [
            {
              "id": "top_1779236690352",
              "nivel_3": "Lei de Abuso de Autoridade (Lei nº 13.869/19)"
            },
            {
              "id": "top_1779236690968",
              "nivel_3": "Crimes em Licitações e Contratos (Arts. 178 a 183-B do CP / Lei 14.133)"
            },
            {
              "id": "top_1779236691560",
              "nivel_3": "Lei de Lavagem de Capitais (Lei nº 9.613/98)"
            },
            {
              "id": "top_1779236692952",
              "nivel_3": "Organização Criminosa (Lei nº 12.850/13)"
            },
            {
              "id": "top_1779236693503",
              "nivel_3": "Lei Maria da Penha: Aspectos Penais (Lei nº 11.340/06)"
            }
          ]
        }
      ]
    },
    {
      "id": "proc_penal",
      "nivel_1": "Direito Processual Penal",
      "divisoes": [
        {
          "id": "pp_fundamentos",
          "nivel_2": "Fundamentos e Princípios",
          "topicos": [
            {
              "id": "pp_fund_principios",
              "nivel_3": "Direito Processual Penal à luz da CF e Princípios",
              "aliases": [
                "Sistemas Processuais",
                "Garantias Constitucionais",
                "Juiz das Garantias"
              ]
            },
            {
              "id": "pp_fund_aplicacao",
              "nivel_3": "Interpretação e Aplicação da Norma Processual Penal",
              "aliases": [
                "Lei Processual no Tempo",
                "Lei Processual no Espaço"
              ]
            }
          ]
        },
        {
          "id": "pp_investigacao",
          "nivel_2": "Investigação Criminal",
          "topicos": [
            {
              "id": "pp_inv_inquerito",
              "nivel_3": "Inquérito Policial",
              "aliases": [
                "Características e Prazos",
                "Arquivamento",
                "Valor Probatório"
              ]
            },
            {
              "id": "pp_inv_anpp",
              "nivel_3": "Acordo de Não Persecução Penal (ANPP)",
              "aliases": [
                "Pacote Anticrime"
              ]
            }
          ]
        },
        {
          "id": "pp_acao",
          "nivel_2": "Ação Penal e Ação Civil",
          "topicos": [
            {
              "id": "pp_acao_penal",
              "nivel_3": "Ação Penal (Pública e Privada)",
              "aliases": [
                "Denúncia e Queixa",
                "Condições da Ação",
                "Decadência e Perempção"
              ]
            },
            {
              "id": "pp_acao_civil",
              "nivel_3": "Ação Civil Ex Delicto",
              "aliases": [
                "Reparação Civil",
                "Efeitos Civis da Sentença Penal"
              ]
            }
          ]
        },
        {
          "id": "pp_jurisdicao",
          "nivel_2": "Jurisdição, Competência e Incidentes",
          "topicos": [
            {
              "id": "pp_jur_competencia",
              "nivel_3": "Competência (Fixação e Modificação)",
              "aliases": [
                "Lugar da Infração e Domicílio",
                "Conexão e Continência",
                "Foro por Prerrogativa de Função",
                "Prevenção"
              ]
            },
            {
              "id": "pp_jur_incidentes",
              "nivel_3": "Questões e Processos Incidentes",
              "aliases": [
                "Exceções",
                "Restituição de Coisas Apreendidas",
                "Medidas Assecuratórias (Sequestro, Arresto)",
                "Incidente de Insanidade Mental",
                "Incidente de Falsidade"
              ]
            }
          ]
        },
        {
          "id": "pp_provas",
          "nivel_2": "Das Provas",
          "topicos": [
            {
              "id": "pp_prov_teoria",
              "nivel_3": "Teoria Geral da Prova e Cadeia de Custódia",
              "aliases": [
                "Ônus da Prova",
                "Provas Ilícitas",
                "Sistemas de Valoração"
              ]
            },
            {
              "id": "pp_prov_meios",
              "nivel_3": "Meios de Prova em Espécie",
              "aliases": [
                "Exame de Corpo de Delito e Perícias",
                "Interrogatório e Confissão",
                "Prova Testemunhal",
                "Reconhecimento de Pessoas e Coisas",
                "Acareação e Documentos"
              ]
            }
          ]
        },
        {
          "id": "pp_sujeitos",
          "nivel_2": "Sujeitos do Processo",
          "topicos": [
            {
              "id": "pp_suj_atores",
              "nivel_3": "Juiz, MP, Acusado e Defensor",
              "aliases": [
                "Impedimento e Suspeição"
              ]
            },
            {
              "id": "pp_suj_auxiliares",
              "nivel_3": "Assistentes e Auxiliares da Justiça",
              "aliases": [
                "Direitos do Ofendido",
                "Assistente de Acusação"
              ]
            }
          ]
        },
        {
          "id": "pp_prisoes",
          "nivel_2": "Prisões e Medidas Cautelares",
          "topicos": [
            {
              "id": "pp_pris_flagrante",
              "nivel_3": "Prisão em Flagrante",
              "aliases": [
                "Espécies",
                "Audiência de Custódia"
              ]
            },
            {
              "id": "pp_pris_preventiva",
              "nivel_3": "Prisão Preventiva e Prisão Temporária",
              "aliases": [
                "Requisitos e Prazos"
              ]
            },
            {
              "id": "pp_pris_cautelares",
              "nivel_3": "Medidas Cautelares Diversas e Liberdade Provisória",
              "aliases": [
                "Fiança"
              ]
            }
          ]
        },
        {
          "id": "pp_atos",
          "nivel_2": "Atos Processuais, Citações e Sentença",
          "topicos": [
            {
              "id": "pp_atos_citacoes",
              "nivel_3": "Citações e Intimações",
              "aliases": [
                "Citação por Edital",
                "Suspensão do Processo (Art. 366)"
              ]
            },
            {
              "id": "pp_atos_sentenca",
              "nivel_3": "Sentença e Coisa Julgada",
              "aliases": [
                "Emendatio Libelli",
                "Mutatio Libelli",
                "Absolvição e Condenação"
              ]
            }
          ]
        },
        {
          "id": "pp_procedimentos",
          "nivel_2": "Processos Comum e Especiais",
          "topicos": [
            {
              "id": "pp_proc_comum",
              "nivel_3": "Processo Comum (Ordinário e Sumário)",
              "aliases": []
            },
            {
              "id": "pp_proc_juri",
              "nivel_3": "Tribunal do Júri",
              "aliases": [
                "Fase de Pronúncia",
                "Plenário e Quesitação"
              ]
            },
            {
              "id": "pp_proc_especiais",
              "nivel_3": "Processos Especiais",
              "aliases": [
                "Competência Originária dos Tribunais",
                "Crimes de Responsabilidade de Funcionário Público",
                "Crimes contra a Honra"
              ]
            }
          ]
        },
        {
          "id": "pp_nulidades_recursos",
          "nivel_2": "Nulidades e Recursos",
          "topicos": [
            {
              "id": "pp_nulidades",
              "nivel_3": "Nulidades",
              "aliases": [
                "Princípio do Prejuízo",
                "Nulidade Absoluta e Relativa"
              ]
            },
            {
              "id": "pp_rec_teoria",
              "nivel_3": "Teoria Geral dos Recursos e Ações Autônomas",
              "aliases": [
                "Habeas Corpus",
                "Revisão Criminal",
                "Mandado de Segurança Criminal"
              ]
            },
            {
              "id": "pp_rec_especie",
              "nivel_3": "Recursos em Espécie",
              "aliases": [
                "Recurso em Sentido Estrito (RESE)",
                "Apelação",
                "Embargos de Declaração",
                "Agravo em Execução",
                "Recursos nos Tribunais Superiores"
              ]
            }
          ]
        },
        {
          "id": "pp_execucao",
          "nivel_2": "Execução Penal (Lei nº 7.210/1984)",
          "topicos": [
            {
              "id": "pp_exec_direitos",
              "nivel_3": "Direitos, Deveres e Disciplina",
              "aliases": [
                "Faltas Disciplinares",
                "Regime Disciplinar Diferenciado (RDD)"
              ]
            },
            {
              "id": "pp_exec_regimes",
              "nivel_3": "Regimes, Progressão e Regressão",
              "aliases": [
                "Livramento Condicional",
                "Saídas Temporárias"
              ]
            },
            {
              "id": "pp_exec_incidentes",
              "nivel_3": "Incidentes da Execução",
              "aliases": [
                "Remição e Detração",
                "Conversões",
                "Medidas de Segurança"
              ]
            }
          ]
        },
        {
          "id": "pp_legislacao_especial",
          "nivel_2": "Legislação Processual Penal Especial",
          "topicos": [
            {
              "id": "pp_leg_jecrim",
              "nivel_3": "Juizados Especiais Criminais (Lei nº 9.099/1995)",
              "aliases": [
                "Transação Penal",
                "Suspensão Condicional do Processo"
              ]
            },
            {
              "id": "pp_leg_investigacao",
              "nivel_3": "Técnicas de Investigação Especial",
              "aliases": [
                "Interceptação Telefônica (Lei nº 9.296/1996)",
                "Organizações Criminosas (Lei nº 12.850/2013)"
              ]
            },
            {
              "id": "pp_leg_vulneraveis",
              "nivel_3": "Proteção a Vítimas e Vulneráveis",
              "aliases": [
                "Lei Maria da Penha (Lei nº 11.340/2006)",
                "Lei Henry Borel (Lei nº 14.344/2022)",
                "Programa de Proteção (Lei nº 9.807/1999)"
              ]
            },
            {
              "id": "pp_leg_diversas",
              "nivel_3": "Outras Leis Esparsas (Procedimentos)",
              "aliases": [
                "Lei de Drogas (Lei nº 11.343/2006)",
                "Lei dos Crimes Hediondos (Lei nº 8.072/1990)",
                "Crimes de Prefeitos (DL nº 201/1967)",
                "Sequestro de Bens (DL nº 3.240/1941)",
                "Lei de Abuso de Autoridade (Lei nº 13.869/2019)",
                "Código de Trânsito Brasileiro (Lei nº 9.503/1997)",
                "Estatuto do Desarmamento (Lei nº 10.826/2003)"
              ]
            },
            {
              "id": "pp_leg_resolucoes",
              "nivel_3": "Resoluções do CNJ",
              "aliases": [
                "Audiência de Custódia (Resolução nº 213/2015)",
                "Proteção de Dados (Resolução nº 427/2021)",
                "Reconhecimento de Pessoas (Resolução nº 484/2022)"
              ]
            }
          ]
        }
      ]
    },
{
  "id": "constitucional",
  "nivel_1": "Direito Constitucional",
  "divisoes": [
    {
      "id": "const_teoria_poder",
      "nivel_2": "Teoria da Constituição e Poder Constituinte",
      "topicos": [
        {
          "id": "const_teoria_constituicao",
          "nivel_3": "Teoria da Constituição e Estado Democrático de Direito",
          "aliases": [
            "Conceito e classificação",
            "Supremacia da Constituição",
            "Fundamentos constitucionais e princípio da República"
          ]
        },
        {
          "id": "const_interpretacao_aplicabilidade",
          "nivel_3": "Interpretação e Aplicabilidade das Normas",
          "aliases": [
            "Hermenêutica constitucional e mutação",
            "Classificação quanto à eficácia e aplicabilidade"
          ]
        },
        {
          "id": "const_poder_constituinte",
          "nivel_3": "Poder Constituinte",
          "aliases": [
            "Poder originário e poder derivado",
            "Poder constituinte estadual",
            "Legitimidade e limites"
          ]
        }
      ]
    },
    {
      "id": "const_direitos_fundamentais",
      "nivel_2": "Direitos e Garantias Fundamentais",
      "topicos": [
        {
          "id": "const_dir_individuais",
          "nivel_3": "Direitos Individuais e Coletivos",
          "aliases": [
            "Direito à vida, privacidade e igualdade",
            "Propriedade e função social",
            "Dignidade da pessoa humana"
          ]
        },
        {
          "id": "const_dir_sociais",
          "nivel_3": "Direitos Sociais",
          "aliases": [
            "Direitos dos trabalhadores",
            "Seguridade social, saúde, educação e cultura",
            "Direito ambiental"
          ]
        },
        {
          "id": "const_nacionalidade_politicos",
          "nivel_3": "Nacionalidade e Direitos Políticos",
          "aliases": [
            "Direitos dos estrangeiros",
            "Cidadania, voto e elegibilidade",
            "Partidos políticos (Lei nº 9.096/1995)"
          ]
        },
        {
          "id": "const_remedios",
          "nivel_3": "Ações e Remédios Constitucionais",
          "aliases": [
            "Habeas corpus, habeas data e mandado de segurança",
            "Ação civil pública e ação popular",
            "Mandado de injunção"
          ]
        }
      ]
    },
    {
      "id": "const_organizacao_estado",
      "nivel_2": "Organização do Estado",
      "topicos": [
        {
          "id": "const_federacao",
          "nivel_3": "Estrutura Federativa e Repartição de Competências",
          "aliases": [
            "União, Estados, Municípios e DF",
            "Consórcios públicos (Lei nº 11.107/2005)"
          ]
        },
        {
          "id": "const_intervencao",
          "nivel_3": "Intervenção",
          "aliases": [
            "Intervenção federal",
            "Intervenção nos Estados e Municípios"
          ]
        }
      ]
    },
    {
      "id": "const_organizacao_poderes",
      "nivel_2": "Organização dos Poderes e Funções Essenciais",
      "topicos": [
        {
          "id": "const_legislativo",
          "nivel_3": "Poder Legislativo",
          "aliases": [
            "Processo legislativo",
            "Comissões parlamentares e imunidades",
            "Tribunais de Contas e fiscalização"
          ]
        },
        {
          "id": "const_executivo",
          "nivel_3": "Poder Executivo e Defesa do Estado",
          "aliases": [
            "Presidencialismo",
            "Medida Provisória",
            "Estado de sítio e Estado de defesa"
          ]
        },
        {
          "id": "const_judiciario",
          "nivel_3": "Poder Judiciário",
          "aliases": [
            "STF, STJ e Justiça dos Estados",
            "Súmula Vinculante",
            "Conselho Nacional de Justiça (CNJ)"
          ]
        },
        {
          "id": "const_funcoes_essenciais",
          "nivel_3": "Funções Essenciais à Justiça",
          "aliases": [
            "Ministério Público",
            "Advocacia e Defensoria Pública",
            "Advocacia Pública"
          ]
        }
      ]
    },
    {
      "id": "const_controle",
      "nivel_2": "Controle de Constitucionalidade",
      "topicos": [
        {
          "id": "const_controle_concentrado_difuso",
          "nivel_3": "Sistemas e Instrumentos de Controle",
          "aliases": [
            "Controle difuso e concentrado",
            "ADI, ADC e ADPF",
            "Inconstitucionalidade por omissão",
            "Efeitos da declaração"
          ]
        }
      ]
    },
    {
      "id": "const_temas_especiais",
      "nivel_2": "Temas Especiais",
      "topicos": [
        {
          "id": "const_pcd",
          "nivel_3": "Convenção Internacional sobre os Direitos das Pessoas com Deficiência",
          "aliases": [
            "Estatuto da Pessoa com Deficiência"
          ]
        },
        {
          "id": "const_indigenas",
          "nivel_3": "Marco temporal indígena",
          "aliases": [
            "Direitos dos Povos Indígenas"
          ]
        }
      ]
    }
  ]
},
    {
      "id": "eleitoral",
      "nivel_1": "Direito Eleitoral",
      "divisoes": [
        {
          "id": "eleitoral_fundamentos_org",
          "nivel_2": "Fundamentos, Direitos Políticos e Justiça Eleitoral",
          "topicos": [
            {
              "id": "eleitoral_teoria",
              "nivel_3": "Conceitos, Princípios, Fontes e Sistemas Eleitorais",
              "aliases": [
                "Interpretação",
                "Aplicação Subsidiária do CPC",
                "Sistema Majoritário e Proporcional"
              ]
            },
            {
              "id": "eleitoral_dir_politicos",
              "nivel_3": "Direitos Políticos",
              "aliases": [
                "Sufrágio Universal e Voto",
                "Perda e Suspensão de Direitos Políticos",
                "Características do Voto"
              ]
            },
            {
              "id": "eleitoral_org_justica",
              "nivel_3": "Órgãos da Justiça Eleitoral e Ministério Público Eleitoral",
              "aliases": [
                "TSE, TREs, Juízes e Juntas Eleitorais",
                "Composição, Atribuições e Competências",
                "Poder Normativo do TSE"
              ]
            }
          ]
        },
        {
          "id": "eleitoral_alistamento_partidos",
          "nivel_2": "Alistamento, Partidos Políticos e Convenções",
          "topicos": [
            {
              "id": "eleitoral_alistamento",
              "nivel_3": "Alistamento e Domicílio Eleitoral",
              "aliases": [
                "Ato, Efeitos, Transferência e Encerramento",
                "Cancelamento e Exclusão do Eleitor",
                "Resolução TSE nº 23.659/2021"
              ]
            },
            {
              "id": "eleitoral_partidos",
              "nivel_3": "Partidos Políticos (Lei nº 9.096/1995)",
              "aliases": [
                "Registro, Funcionamento, Criação e Extinção",
                "Filiação, Fidelidade e Disciplina Partidária",
                "Federações Partidárias"
              ]
            },
            {
              "id": "eleitoral_financas_partidos",
              "nivel_3": "Finanças e Contabilidade dos Partidos",
              "aliases": [
                "Fundo Partidário",
                "Fundo Especial de Financiamento de Campanha (FEFC)",
                "Propaganda Partidária"
              ]
            },
            {
              "id": "eleitoral_coligacoes",
              "nivel_3": "Coligações e Convenções para Escolha de Candidatos",
              "aliases": []
            }
          ]
        },
        {
          "id": "eleitoral_elegibilidade",
          "nivel_2": "Elegibilidade, Inelegibilidade e Registro",
          "topicos": [
            {
              "id": "eleitoral_cond_elegibilidade",
              "nivel_3": "Elegibilidade e Inelegibilidades",
              "aliases": [
                "Lei das Inelegibilidades (LC nº 64/1990)",
                "Prazos de Desincompatibilização (LC nº 86/1996)"
              ]
            },
            {
              "id": "eleitoral_registro",
              "nivel_3": "Registro de Candidatos",
              "aliases": [
                "Impugnação de Registro",
                "Cotas de Gênero"
              ]
            }
          ]
        },
        {
          "id": "eleitoral_campanha",
          "nivel_2": "Campanha Eleitoral e Propaganda",
          "topicos": [
            {
              "id": "eleitoral_financiamento",
              "nivel_3": "Arrecadação, Aplicação de Recursos e Prestação de Contas",
              "aliases": []
            },
            {
              "id": "eleitoral_pesquisas",
              "nivel_3": "Pesquisas e Testes Pré-Eleitorais",
              "aliases": []
            },
            {
              "id": "eleitoral_propaganda",
              "nivel_3": "Propaganda Eleitoral (Lei nº 9.504/1997)",
              "aliases": [
                "Imprensa, Rádio, TV e Internet",
                "Propaganda Eleitoral Antecipada",
                "Direito de Resposta"
              ]
            },
            {
              "id": "eleitoral_condutas_vedadas",
              "nivel_3": "Condutas Vedadas aos Agentes Públicos",
              "aliases": []
            }
          ]
        },
        {
          "id": "eleitoral_pleito",
          "nivel_2": "Votação, Apuração e Diplomação",
          "topicos": [
            {
              "id": "eleitoral_votacao_atos",
              "nivel_3": "Da Votação e Atos Preparatórios",
              "aliases": [
                "Circunscrição, Zona e Seção Eleitoral",
                "Mesas Receptoras, Cabinas e Urnas",
                "Polícia e Fiscalização das Eleições"
              ]
            },
            {
              "id": "eleitoral_votacao_sistema",
              "nivel_3": "Sistema Eletrônico de Votação, Apuração e Totalização",
              "aliases": [
                "Nulidades na Votação",
                "Proclamação e Diplomação dos Eleitos"
              ]
            }
          ]
        },
        {
          "id": "eleitoral_processo",
          "nivel_2": "Processo e Ações Eleitorais",
          "topicos": [
            {
              "id": "eleitoral_acoes",
              "nivel_3": "Ações e Representações Eleitorais",
              "aliases": [
                "Ação de Impugnação de Registro de Candidatura (AIRC)",
                "Ação de Investigação Judicial Eleitoral (AIJE)",
                "Ação de Impugnação de Mandato Eletivo (AIME)",
                "Recurso Contra Expedição de Diploma (RCED)",
                "Representação por Captação Ilícita de Sufrágio",
                "Impugnações perante as Juntas"
              ]
            },
            {
              "id": "eleitoral_recursos",
              "nivel_3": "Recursos Eleitorais",
              "aliases": [
                "Pressupostos, Efeitos e Prazos",
                "Recursos perante Juntas, Juízos e TREs"
              ]
            },
            {
              "id": "eleitoral_jurisprudencia",
              "nivel_3": "Jurisprudência dos Tribunais Superiores em Matéria Eleitoral",
              "aliases": []
            }
          ]
        },
        {
          "id": "eleitoral_penal",
          "nivel_2": "Direito Penal e Processual Penal Eleitoral",
          "topicos": [
            {
              "id": "eleitoral_crimes",
              "nivel_3": "Crimes Eleitorais",
              "aliases": [
                "Conceito, Natureza e Classificação",
                "Tipos previstos na Legislação Eleitoral"
              ]
            },
            {
              "id": "eleitoral_processo_penal",
              "nivel_3": "Processo Penal Eleitoral",
              "aliases": [
                "Investigação Criminal Eleitoral (Inquérito, Flagrante, Notícia Crime)",
                "Ação Penal Eleitoral e Competência",
                "Rito Processual e Incidentes"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "empresarial",
      "nivel_1": "Direito Empresarial",
      "divisoes": [
        {
          "id": "emp_teoria_geral",
          "nivel_2": "Teoria Geral e Estabelecimento",
          "topicos": [
            {
              "id": "emp_teoria_empresa",
              "nivel_3": "Empresário, Caracterização e Registro",
              "aliases": [
                "Conceito de empresário",
                "Capacidade e impedimentos",
                "Registro Público de Empresas Mercantis"
              ]
            },
            {
              "id": "emp_estabelecimento",
              "nivel_3": "Estabelecimento e Nome Empresarial",
              "aliases": [
                "Trespasse e aviamento",
                "Proteção ao nome",
                "Prepostos"
              ]
            }
          ]
        },
        {
          "id": "emp_societario",
          "nivel_2": "Direito Societário",
          "topicos": [
            {
              "id": "emp_soc_geral",
              "nivel_3": "Sociedades em Geral e Personificadas/Não Personificadas",
              "aliases": [
                "Sociedade comum",
                "Sociedade em conta de participação",
                "Sociedade simples",
                "Desconsideração da personalidade jurídica"
              ]
            },
            {
              "id": "emp_soc_limitada",
              "nivel_3": "Sociedade Limitada",
              "aliases": [
                "Administração e conselho fiscal",
                "Exclusão de sócio",
                "Responsabilidade dos sócios"
              ]
            },
            {
              "id": "emp_soc_acoes",
              "nivel_3": "Sociedade por Ações (Lei nº 6.404/1976)",
              "aliases": [
                "Capital social e ações",
                "Debêntures",
                "Órgãos sociais",
                "Responsabilidade dos administradores",
                "Operações societárias"
              ]
            }
          ]
        },
        {
          "id": "emp_titulos_credito",
          "nivel_2": "Títulos de Crédito",
          "topicos": [
            {
              "id": "emp_tit_geral",
              "nivel_3": "Teoria Geral e Títulos em Espécie (LUG)",
              "aliases": [
                "Lei Uniforme de Genebra (Decreto nº 57.663/1966)",
                "Aval e endosso",
                "Letra de câmbio, nota promissória, cheque e duplicata"
              ]
            },
            {
              "id": "emp_tit_protesto",
              "nivel_3": "Protesto de Títulos (Lei nº 9.492/1997)",
              "aliases": [
                "Fins e efeitos do protesto"
              ]
            }
          ]
        },
        {
          "id": "emp_falencia",
          "nivel_2": "Direito Falimentar e Recuperacional",
          "topicos": [
            {
              "id": "emp_fal_rec_judicial",
              "nivel_3": "Recuperação Judicial e Extrajudicial (Lei nº 11.101/2005)",
              "aliases": [
                "Plano de recuperação",
                "Administrador judicial",
                "Comitê de credores"
              ]
            },
            {
              "id": "emp_fal_processo",
              "nivel_3": "Falência",
              "aliases": [
                "Sentença declaratória",
                "Classificação dos créditos",
                "Inabilitação e reabilitação do falido"
              ]
            }
          ]
        },
        {
          "id": "emp_prop_industrial",
          "nivel_2": "Propriedade Industrial",
          "topicos": [
            {
              "id": "emp_prop_ind_geral",
              "nivel_3": "Marcas, Patentes e Concorrência Desleal (Lei nº 9.279/1996)",
              "aliases": [
                "Invenção e modelo de utilidade",
                "Desenho industrial",
                "Indicação geográfica"
              ]
            }
          ]
        },
        {
          "id": "emp_legislacao_especial",
          "nivel_2": "Legislação Especial",
          "topicos": [
            {
              "id": "emp_leg_mep_epp",
              "nivel_3": "Microempresa e Empresa de Pequeno Porte (LC nº 123/2006)",
              "aliases": [
                "Tratamento diferenciado e favorecido",
                "Simples nacional"
              ]
            },
            {
              "id": "emp_leg_agronegocio",
              "nivel_3": "Títulos do Agronegócio (Lei nº 11.076/2004)",
              "aliases": [
                "CDA e WA"
              ]
            }
          ]
        }
      ]
    },
{
  "id": "financeiro_tributario",
  "nivel_1": "Direito Financeiro e Tributário",
  "divisoes": [
    {
      "id": "trib_sistema_competencia",
      "nivel_2": "Sistema Tributário Nacional, Competência e Limitações",
      "topicos": [
        {
          "id": "trib_stn_receitas",
          "nivel_3": "Sistema Tributário Nacional e Repartição de Receitas",
          "aliases": [
            "Princípios gerais",
            "Repartições de competência na CF/88"
          ]
        },
        {
          "id": "trib_competencia",
          "nivel_3": "Competência Tributária",
          "aliases": [
            "Conceito, espécies e características",
            "Capacidade tributária ativa e limitações"
          ]
        },
        {
          "id": "trib_limitacoes_imunidades",
          "nivel_3": "Limitações ao Poder de Tributar e Imunidades",
          "aliases": [
            "Imunidades genéricas e específicas",
            "Limitações constitucionais"
          ]
        }
      ]
    },
    {
      "id": "trib_tributos_especies",
      "nivel_2": "Teoria Geral dos Tributos e Espécies Tributárias",
      "topicos": [
        {
          "id": "trib_conceito_classificacao",
          "nivel_3": "Conceito e Classificação dos Tributos",
          "aliases": [
            "Natureza jurídica e denominação",
            "Tributos diretos e indiretos",
            "Fiscalidade, extrafiscalidade e parafiscalidade"
          ]
        },
        {
          "id": "trib_especies",
          "nivel_3": "Espécies Tributárias",
          "aliases": [
            "Impostos, taxas e contribuição de melhoria",
            "Contribuições sociais",
            "Preço público, tarifa e pedágio"
          ]
        },
        {
          "id": "trib_impostos_especie",
          "nivel_3": "Impostos em Espécie",
          "aliases": [
            "Impostos da União",
            "Impostos dos Estados e do Distrito Federal",
            "Impostos dos Municípios"
          ]
        }
      ]
    },
    {
      "id": "trib_legislacao_obrigacao",
      "nivel_2": "Legislação, Norma e Obrigação Tributária",
      "topicos": [
        {
          "id": "trib_normas_legislacao",
          "nivel_3": "Normas e Legislação Tributária",
          "aliases": [
            "Fontes e espécies normativas",
            "Vigência, aplicação, interpretação e integração"
          ]
        },
        {
          "id": "trib_norma_fato_gerador",
          "nivel_3": "Norma Jurídica e Fato Gerador",
          "aliases": [
            "Regra-matriz de incidência tributária",
            "Efeitos e classificações do fato gerador"
          ]
        },
        {
          "id": "trib_obrigacao",
          "nivel_3": "Obrigação Tributária",
          "aliases": [
            "Deveres instrumentais ou formais",
            "Sujeito ativo e sujeito passivo",
            "Solidariedade, capacidade e domicílio tributário"
          ]
        },
        {
          "id": "trib_responsabilidade",
          "nivel_3": "Responsabilidade Tributária",
          "aliases": [
            "Responsabilidade de sucessores e terceiros",
            "Responsabilidade por infrações",
            "Substituição tributária"
          ]
        }
      ]
    },
    {
      "id": "trib_credito",
      "nivel_2": "Crédito Tributário",
      "topicos": [
        {
          "id": "trib_constituicao_lancamento",
          "nivel_3": "Constituição e Lançamento Tributário",
          "aliases": [
            "Conceito, natureza jurídica e atributos",
            "Modalidades e revisão"
          ]
        },
        {
          "id": "trib_suspensao",
          "nivel_3": "Suspensão da Exigibilidade do Crédito",
          "aliases": [
            "Moratória e parcelamento",
            "Depósito, reclamações e recursos administrativos",
            "Medida liminar e tutela antecipada"
          ]
        },
        {
          "id": "trib_extincao",
          "nivel_3": "Extinção do Crédito Tributário",
          "aliases": [
            "Pagamento, compensação, transação e remissão",
            "Decadência e prescrição",
            "Repetição de indébito e dação em pagamento"
          ]
        },
        {
          "id": "trib_exclusao",
          "nivel_3": "Exclusão do Crédito Tributário",
          "aliases": [
            "Isenção e anistia"
          ]
        },
        {
          "id": "trib_garantias",
          "nivel_3": "Garantias e Privilégios do Crédito",
          "aliases": [
            "Preferências"
          ]
        }
      ]
    },
    {
      "id": "trib_adm_processo",
      "nivel_2": "Administração, Infrações e Processo Tributário",
      "topicos": [
        {
          "id": "trib_administracao_sancoes",
          "nivel_3": "Administração e Sanções Tributárias",
          "aliases": [
            "Fiscalização",
            "Dívida ativa e protesto de CDA",
            "Certidões negativas",
            "Ilícitos administrativos e sanções tributárias"
          ]
        },
        {
          "id": "trib_processo_judicial",
          "nivel_3": "Processo Judicial Tributário",
          "aliases": [
            "Execução fiscal",
            "Ação cautelar fiscal e ação declaratória",
            "Ação anulatória e mandado de segurança",
            "Ação de consignação em pagamento"
          ]
        }
      ]
    },
    {
      "id": "financeiro_internacional",
      "nivel_2": "Direito Financeiro e Tributação Internacional",
      "topicos": [
        {
          "id": "trib_internacional",
          "nivel_3": "Tributação Internacional",
          "aliases": [
            "Acordos para evitar dupla tributação",
            "OMC, Mercosul, ALADI e ALCA",
            "Incentivos fiscais, evasão e elisão tributárias"
          ]
        },
        {
          "id": "fin_atividade_orcamento",
          "nivel_3": "Direito Financeiro e Orçamento",
          "aliases": [
            "Atividade financeira do Estado",
            "Leis orçamentárias (PPA, LDO e LOA)",
            "Lei de Responsabilidade Fiscal",
            "Lei nº 4.320/1964"
          ]
        }
      ]
    }
  ]
},
{
  "id": "ambiental",
  "nivel_1": "Direito Ambiental",
  "divisoes": [
    {
      "id": "amb_fundamentos_constitucional",
      "nivel_2": "Fundamentos e Direito Ambiental Constitucional",
      "topicos": [
        {
          "id": "amb_teoria_geral",
          "nivel_3": "Teoria Geral, Princípios e Ética Ambiental",
          "aliases": [
            "Conceito, Natureza e Fontes",
            "Estado Constitucional Ecológico",
            "Ética e o Estatuto da Cidade"
          ]
        },
        {
          "id": "amb_direito_constitucional",
          "nivel_3": "Direito Ambiental Constitucional",
          "aliases": [
            "Deveres ambientais e ecológicos",
            "Competência legislativa em matéria ambiental",
            "Competências exclusivas e concorrentes"
          ]
        }
      ]
    },
    {
      "id": "amb_pnma_instrumentos",
      "nivel_2": "Política Nacional do Meio Ambiente e Instrumentos",
      "topicos": [
        {
          "id": "amb_pnma_sisnama",
          "nivel_3": "Política Nacional do Meio Ambiente (PNMA) e SISNAMA",
          "aliases": [
            "Princípios, finalidade e instrumentos",
            "Conselho de Governo, Conama e Ministério do Meio Ambiente",
            "Ibama e Fundo Nacional do Meio Ambiente (FNMA)"
          ]
        },
        {
          "id": "amb_licenciamento_eia",
          "nivel_3": "Licenciamento e Avaliação de Impacto Ambiental",
          "aliases": [
            "Tipos de Licença (LP, LI e LO)",
            "Estudo de Impacto Ambiental (EIA/RIMA)",
            "Audiência Pública e Normas do Conama"
          ]
        },
        {
          "id": "amb_zoneamento",
          "nivel_3": "Zoneamento Ambiental",
          "aliases": [
            "Zoneamento Ecológico-Econômico",
            "Zonas de Uso Industrial (ZUI, ZUEI, ZUPI, ZUD)",
            "Zoneamento Ambiental Agrícola e Costeiro"
          ]
        }
      ]
    },
    {
      "id": "amb_bens_espacos_poluicao",
      "nivel_2": "Bens Ambientais, Espaços Protegidos e Poluição",
      "topicos": [
        {
          "id": "amb_bens_ambientais",
          "nivel_3": "Bens Ambientais e Recursos Naturais",
          "aliases": [
            "Águas e cavidades naturais",
            "Fauna, flora e florestas",
            "Praias, plataforma continental e terrenos de marinha"
          ]
        },
        {
          "id": "amb_espacos_protegidos",
          "nivel_3": "Espaços Territoriais Especialmente Protegidos",
          "aliases": [
            "Sistema Nacional de Unidades de Conservação (SNUC)",
            "Áreas de Preservação Permanente (APP)"
          ]
        },
        {
          "id": "amb_poluicao_mudancas",
          "nivel_3": "Poluição e Mudanças Climáticas",
          "aliases": [
            "Poluição de águas, atmosférica, sonora e por resíduos",
            "Poluição por agrotóxicos e rejeitos perigosos",
            "Mercado de Carbono e Pagamento por Serviços Ambientais"
          ]
        }
      ]
    },
    {
      "id": "amb_responsabilidade_tutela",
      "nivel_2": "Responsabilidade, Defesa Processual e Crimes Ambientais",
      "topicos": [
        {
          "id": "amb_responsabilidade_dano",
          "nivel_3": "Dano e Responsabilidade Ambiental",
          "aliases": [
            "Apuração e reparação do dano",
            "Responsabilidade Administrativa, Civil e Penal",
            "Infrações administrativas e sanções"
          ]
        },
        {
          "id": "amb_defesa_processual",
          "nivel_3": "Meios Processuais para a Defesa Ambiental",
          "aliases": [
            "Ação Civil Pública e Ação Popular",
            "Mandado de Segurança, MI e ADI",
            "Tutela inibitória, de urgência e evidência",
            "Desapropriação e Tombamento"
          ]
        },
        {
          "id": "amb_crimes_ambientais",
          "nivel_3": "Crimes Contra o Meio Ambiente",
          "aliases": [
            "Lei de Crimes Ambientais (Lei nº 9.605/1998)",
            "Responsabilidade penal da pessoa jurídica",
            "Crimes contra flora, fauna, patrimônio e de poluição"
          ]
        }
      ]
    },
    {
      "id": "amb_legislacao_especial_internacional",
      "nivel_2": "Políticas Nacionais, Legislação Especial e Direito Internacional",
      "topicos": [
        {
          "id": "amb_politicas_nacionais",
          "nivel_3": "Políticas Nacionais Setoriais e Leis Específicas",
          "aliases": [
            "Recursos Hídricos (Lei nº 9.433/1997) e Saneamento (Lei nº 11.445/2007)",
            "Resíduos Sólidos (Lei nº 12.305/2010)",
            "Código Florestal (Lei nº 12.651/2012) e Mata Atlântica (Lei nº 11.428/2006)",
            "Educação Ambiental, Biossegurança e Biodiversidade"
          ]
        },
        {
          "id": "amb_internacional",
          "nivel_3": "Direito Ambiental Internacional",
          "aliases": [
            "Princípios gerais e fontes",
            "Mercosul e procedimentos transfronteiriços",
            "Organizações Não Governamentais (ONGs)"
          ]
        },
        {
          "id": "amb_legislacao_estadual",
          "nivel_3": "Legislação Estadual de Pernambuco",
          "aliases": [
            "Lei Estadual nº 14.249/2010",
            "Licenciamento ambiental e infrações em PE"
          ]
        }
      ]
    }
  ]
},
    {
      "id": "administrativo",
      "nivel_1": "Direito Administrativo",
      "divisoes": [
        {
          "id": "adm_fundamentos_org",
          "nivel_2": "Fundamentos e Organização Administrativa",
          "topicos": [
            {
              "id": "adm_regime_principios",
              "nivel_3": "Regime Jurídico-Administrativo e Princípios",
              "aliases": [
                "Princípios Constitucionais",
                "Restrições ao princípio da legalidade",
                "A constitucionalização do Direito Administrativo"
              ]
            },
            {
              "id": "adm_lindb",
              "nivel_3": "Lei de Introdução às Normas do Direito Brasileiro (LINDB)",
              "aliases": [
                "Interpretação do direito administrativo",
                "Controle sistemático das relações"
              ]
            },
            {
              "id": "adm_organizacao",
              "nivel_3": "Organização Administrativa",
              "aliases": [
                "Administração Direta e Indireta",
                "Autarquias, Agências Reguladoras e Executivas",
                "Fundações e Consórcios Públicos",
                "Empresas Públicas e Sociedades de Economia Mista"
              ]
            },
            {
              "id": "adm_estatais",
              "nivel_3": "Estatuto das Empresas Estatais",
              "aliases": [
                "Lei nº 13.303/2006"
              ]
            },
            {
              "id": "adm_terceiro_setor",
              "nivel_3": "Terceiro Setor e Entidades de Colaboração",
              "aliases": [
                "Organizações Sociais (OS)",
                "OSCIPs e Organizações da Sociedade Civil",
                "Ajustes Colaborativos"
              ]
            }
          ]
        },
        {
          "id": "adm_atos_poderes",
          "nivel_2": "Atos, Poderes e Controles Administrativos",
          "topicos": [
            {
              "id": "adm_atos",
              "nivel_3": "Atos Administrativos",
              "aliases": [
                "Conceito, elementos, atributos e espécies",
                "Validade, eficácia e extinção (anulação, revogação, caducidade, etc.)",
                "Controle de mérito e de legalidade"
              ]
            },
            {
              "id": "adm_poderes",
              "nivel_3": "Poderes Administrativos",
              "aliases": [
                "Poder de Polícia"
              ]
            },
            {
              "id": "adm_controle",
              "nivel_3": "Controles da Administração Pública",
              "aliases": [
                "Controle administrativo, legislativo e judicial",
                "Discricionariedade e controle judicial",
                "Controle pelo Tribunal de Contas"
              ]
            }
          ]
        },
        {
          "id": "adm_agentes_publicos",
          "nivel_2": "Agentes Públicos",
          "topicos": [
            {
              "id": "adm_agentes_regime",
              "nivel_3": "Regime dos Servidores Públicos",
              "aliases": [
                "Cargo, emprego e função pública",
                "Provimento, vacância, remoção, redistribuição e substituição",
                "Direitos, vantagens, deveres e responsabilidades"
              ]
            },
            {
              "id": "adm_agentes_disciplinar",
              "nivel_3": "Regime Disciplinar e Seguridade Social",
              "aliases": [
                "Aposentadoria e pensões",
                "Aposentadoria de magistrado e MP"
              ]
            },
            {
              "id": "adm_agentes_loman",
              "nivel_3": "Lei Orgânica da Magistratura Nacional (LOMAN)",
              "aliases": [
                "LC nº 35/1979"
              ]
            },
            {
              "id": "adm_agentes_estaduais",
              "nivel_3": "Estatuto dos Servidores Públicos de Pernambuco",
              "aliases": [
                "Lei Estadual nº 6.123/1968"
              ]
            }
          ]
        },
        {
          "id": "adm_licitacoes_contratos",
          "nivel_2": "Licitações e Contratos",
          "topicos": [
            {
              "id": "adm_licitacao",
              "nivel_3": "Licitações (Lei nº 14.133/2021)",
              "aliases": [
                "Princípios e modalidades",
                "Dispensa e Inexigibilidade",
                "Fases da licitação, habilitação e julgamento",
                "Registro de preços e RDC"
              ]
            },
            {
              "id": "adm_contratos",
              "nivel_3": "Contratos Administrativos",
              "aliases": [
                "Espécies e características",
                "Prerrogativas da Administração",
                "Execução, inexecução e rescisão",
                "Teoria da Imprevisão e Cláusula rebus sic stantibus"
              ]
            }
          ]
        },
        {
          "id": "adm_servicos_bens",
          "nivel_2": "Serviços Públicos, Bens e Intervenção",
          "topicos": [
            {
              "id": "adm_servicos",
              "nivel_3": "Serviços Públicos e Delegações",
              "aliases": [
                "Concessões e Permissões (Lei nº 8.987/1995)",
                "Parcerias Público-Privadas (PPPs)",
                "Convênios e Consórcios"
              ]
            },
            {
              "id": "adm_bens",
              "nivel_3": "Domínio Público e Bens Públicos",
              "aliases": [
                "Regime jurídico, classificação e utilização",
                "Alienação",
                "Estatuto da Cidade (Lei nº 10.257/2001)"
              ]
            },
            {
              "id": "adm_intervencao_propriedade",
              "nivel_3": "Intervenção do Estado na Propriedade",
              "aliases": [
                "Desapropriação e Retrocessão",
                "Servidão administrativa, Tombamento e Requisição",
                "Ocupação provisória e Limitação administrativa",
                "Loteamento e zoneamento"
              ]
            }
          ]
        },
        {
          "id": "adm_probidade_responsabilidade",
          "nivel_2": "Probidade e Responsabilidade Civil",
          "topicos": [
            {
              "id": "adm_responsabilidade",
              "nivel_3": "Responsabilidade Civil do Estado",
              "aliases": [
                "Responsabilidade objetiva e subjetiva",
                "Causas de exclusão e mitigação",
                "Direito de regresso"
              ]
            },
            {
              "id": "adm_improbidade",
              "nivel_3": "Improbidade Administrativa (Lei nº 8.429/1992)",
              "aliases": [
                "Atos de improbidade (Enriquecimento ilícito, Prejuízo ao erário)",
                "Penas, procedimento e prescrição"
              ]
            },
            {
              "id": "adm_transparencia_anticorrupcao",
              "nivel_3": "Legislação Anticorrupção e Transparência",
              "aliases": [
                "Lei de Responsabilidade Fiscal (LC nº 101/2000)",
                "Lei de Acesso à Informação (Lei nº 12.527/2011)",
                "Lei Anticorrupção (Lei nº 12.846/2013)"
              ]
            }
          ]
        },
        {
          "id": "adm_processo_infracoes",
          "nivel_2": "Processo Administrativo e Infrações",
          "topicos": [
            {
              "id": "adm_processo_geral",
              "nivel_3": "Infrações, Sanções e Processo Administrativo",
              "aliases": [
                "Princípios, sujeitos e instrução",
                "Sindicância e recursos",
                "Coisa julgada, revisão, prescrição e decadência"
              ]
            },
            {
              "id": "adm_processo_pe",
              "nivel_3": "Processo Administrativo Estadual",
              "aliases": [
                "Lei Estadual nº 11.781/2000"
              ]
            }
          ]
        },
        {
          "id": "adm_jurisprudencia",
          "nivel_2": "Jurisprudência e Súmulas",
          "topicos": [
            {
              "id": "adm_jur_stf_stj",
              "nivel_3": "Jurisprudência dos Tribunais Superiores",
              "aliases": [
                "Súmulas Vinculantes",
                "Recursos repetitivos e repercussão geral em Direito Administrativo"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "humanistica_dh",
      "nivel_1": "Noções Gerais de Direito, Formação Humanística e Direitos Humanos",
      "divisoes": [
        {
          "id": "hum_leg_estadual",
          "nivel_2": "Legislação Estadual de Pernambuco",
          "topicos": [
            {
              "id": "hum_leg_pe_estatutos",
              "nivel_3": "Estatutos e Códigos Judiciários",
              "aliases": [
                "Estatuto dos Servidores Públicos de PE (Lei nº 6.123/1968)",
                "Código de Organização Judiciária de PE (LC nº 100/2007)"
              ]
            },
            {
              "id": "hum_leg_pe_custas",
              "nivel_3": "Custas, Taxa Judiciária e Previdência",
              "aliases": [
                "Regime jurídico da taxa judiciária (Lei nº 17.116/2020)",
                "Sistema de Previdência Social dos Servidores (LC nº 28/2000)"
              ]
            },
            {
              "id": "hum_leg_pe_const",
              "nivel_3": "Constituição Estadual e Regimento",
              "aliases": [
                "Constituição do Estado de Pernambuco",
                "Regimento interno do Tribunal de Justiça de Pernambuco (TJPE)"
              ]
            }
          ]
        },
        {
          "id": "hum_sociologia",
          "nivel_2": "Sociologia do Direito",
          "topicos": [
            {
              "id": "hum_soc_administracao",
              "nivel_3": "Sociologia da Administração Judiciária",
              "aliases": [
                "Aspectos gerenciais",
                "Gestão de pessoas e economia"
              ]
            },
            {
              "id": "hum_soc_relacoes",
              "nivel_3": "Relações Sociais e Comunicação",
              "aliases": [
                "Controle social e o Direito",
                "Transformações sociais",
                "Direito, Comunicação Social e opinião pública"
              ]
            },
            {
              "id": "hum_soc_conflitos",
              "nivel_3": "Conflitos Sociais",
              "aliases": [
                "Sistemas não judiciais de composição de litígios",
                "Mecanismos de resolução"
              ]
            }
          ]
        },
        {
          "id": "hum_psicologia",
          "nivel_2": "Psicologia Judiciária",
          "topicos": [
            {
              "id": "hum_psi_comunicacao",
              "nivel_3": "Psicologia e Comunicação",
              "aliases": [
                "Relacionamento interpessoal",
                "Relacionamento do magistrado com a sociedade e a mídia"
              ]
            },
            {
              "id": "hum_psi_problemas",
              "nivel_3": "Problemas Atuais com Reflexos no Direito",
              "aliases": [
                "Assédio moral",
                "Assédio sexual"
              ]
            },
            {
              "id": "hum_psi_conflitos",
              "nivel_3": "Teoria do Conflito e Verdade Judicial",
              "aliases": [
                "Mecanismos autocompositivos",
                "Técnicas de negociação e mediação",
                "Processo psicológico, comportamento de partes e testemunhas"
              ]
            }
          ]
        },
        {
          "id": "hum_etica",
          "nivel_2": "Ética e Estatuto Jurídico da Magistratura Nacional",
          "topicos": [
            {
              "id": "hum_etica_regime",
              "nivel_3": "Regime Jurídico, Direitos e Deveres",
              "aliases": [
                "Carreiras, ingresso, promoções e remoções",
                "Integridade pessoal, honra e decoro",
                "Cortesia e prudência do Juiz"
              ]
            },
            {
              "id": "hum_etica_codigo",
              "nivel_3": "Código de Ética da Magistratura Nacional",
              "aliases": [
                "Ilícitos éticos e sanções",
                "O papel da cordialidade na prestação jurisdicional"
              ]
            },
            {
              "id": "hum_etica_controles",
              "nivel_3": "Administração, Controles e Responsabilidade",
              "aliases": [
                "Sistemas de controle interno (Corregedorias, Ouvidorias, CNJ)",
                "Responsabilidade administrativa, civil e criminal",
                "Administração judicial e planejamento estratégico"
              ]
            }
          ]
        },
        {
          "id": "hum_filosofia",
          "nivel_2": "Filosofia do Direito",
          "topicos": [
            {
              "id": "hum_fil_justica",
              "nivel_3": "O Conceito de Justiça e de Direito",
              "aliases": [
                "Justiça como valor universal e jurídico-político",
                "Equidade",
                "Direito e Moral"
              ]
            },
            {
              "id": "hum_fil_interpretacao",
              "nivel_3": "Interpretação do Direito",
              "aliases": [
                "A lógica do razoável",
                "Superação do raciocínio lógico-dedutivo"
              ]
            }
          ]
        },
        {
          "id": "hum_teoria_geral",
          "nivel_2": "Teoria Geral do Direito e da Política",
          "topicos": [
            {
              "id": "hum_tgd_direito",
              "nivel_3": "Direito Objetivo, Subjetivo e Fontes",
              "aliases": [
                "Princípios gerais de Direito",
                "Jurisprudência e Súmula vinculante"
              ]
            },
            {
              "id": "hum_tgd_eficacia",
              "nivel_3": "Eficácia da Lei no Tempo",
              "aliases": [
                "Conflito de normas jurídicas no tempo"
              ]
            },
            {
              "id": "hum_tgd_politica",
              "nivel_3": "Política e Ideologias",
              "aliases": [
                "Conceito de política",
                "Política e Direito"
              ]
            },
            {
              "id": "hum_tgd_onu_agenda",
              "nivel_3": "ONU e Agenda 2030",
              "aliases": [
                "Declaração Universal dos Direitos do Homem (DUDH)",
                "Agenda 2030 e os 17 ODS"
              ]
            },
            {
              "id": "hum_tgd_genero",
              "nivel_3": "Gênero e Protocolo de Julgamento",
              "aliases": [
                "Gênero e Patriarcado",
                "Gênero e Raça",
                "Protocolo de Julgamento com perspectiva de gênero (CNJ)"
              ]
            }
          ]
        },
        {
          "id": "hum_digital",
          "nivel_2": "Direito Digital",
          "topicos": [
            {
              "id": "hum_dig_judiciario",
              "nivel_3": "Transformação Digital no Poder Judiciário",
              "aliases": [
                "4ª Revolução industrial",
                "Inteligência Artificial e Direito",
                "Ciência de dados, jurimetria e audiências virtuais"
              ]
            },
            {
              "id": "hum_dig_penal",
              "nivel_3": "Persecução Penal e Novas Tecnologias",
              "aliases": [
                "Crimes virtuais e cibersegurança",
                "Deepweb e Darkweb",
                "Provas digitais e criptomoedas"
              ]
            },
            {
              "id": "hum_dig_contratos_dados",
              "nivel_3": "Contratos Inteligentes e Proteção de Dados",
              "aliases": [
                "Blockchain e algoritmos",
                "LGPD e proteção de dados pessoais"
              ]
            }
          ]
        },
        {
          "id": "hum_pragmatismo_economia",
          "nivel_2": "Pragmatismo, Análise Econômica e Economia Comportamental",
          "topicos": [
            {
              "id": "hum_pec_pragmatismo",
              "nivel_3": "Função Judicial e Pragmatismo",
              "aliases": [
                "Consequencialismo, Antifundacionalismo",
                "Racionalismo, Empirismo e Utilitarismo"
              ]
            },
            {
              "id": "hum_pec_aed",
              "nivel_3": "Análise Econômica do Direito",
              "aliases": [
                "Eficiência processual e racionalidade econômica",
                "Demandas frívolas",
                "Precedentes, segurança jurídica e coisa julgada"
              ]
            },
            {
              "id": "hum_pec_comportamental",
              "nivel_3": "Economia Comportamental e Governança",
              "aliases": [
                "Heurística e vieses cognitivos",
                "Governança corporativa e Compliance no Brasil",
                "Whistleblower"
              ]
            }
          ]
        },
        {
          "id": "hum_antidiscriminacao",
          "nivel_2": "Direito da Antidiscriminação",
          "topicos": [
            {
              "id": "hum_antid_conceitos",
              "nivel_3": "Conceitos e Modalidades de Discriminação",
              "aliases": [
                "Racismo, Sexismo, Intolerância Religiosa, LGBTQIA+fobia",
                "Legislação antidiscriminação nacional e internacional"
              ]
            },
            {
              "id": "hum_antid_acoes_povos",
              "nivel_3": "Ações Afirmativas e Povos Tradicionais",
              "aliases": [
                "Direitos dos Povos indígenas",
                "Direitos das comunidades tradicionais"
              ]
            }
          ]
        },
        {
          "id": "direitos_humanos",
          "nivel_2": "Direitos Humanos",
          "topicos": [
            {
              "id": "dh_teoria_sistemas",
              "nivel_3": "Teoria Geral e Sistemas de Proteção",
              "aliases": [
                "Sistema global de proteção",
                "Sistema regional interamericano"
              ]
            },
            {
              "id": "dh_aplicacao_brasil",
              "nivel_3": "Aplicação e Controle de Convencionalidade",
              "aliases": [
                "Controle de convencionalidade",
                "Relação entre o direito internacional e o direito brasileiro",
                "Os direitos humanos na CF/1988 e a jurisprudência do STF"
              ]
            }
          ]
        }
      ]
    }
  ]
}
