
--
-- База данных: "тест"
--

-- --------------------------------------------------------

--
-- Структура таблицы "cabinet"
--

CREATE TABLE "cabinet"
(
  "num_cab" char(4) NOT NULL,
  "square" char(3) NOT NULL
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы "cabinet"
--

INSERT INTO "cabinet"
  ("num_cab", "square")
VALUES
  ('100', '50'),
  ('200', '40'),
  ('300', '60'),
  ('400', '70'),
  ('500', '45');

-- --------------------------------------------------------

--
-- Структура таблицы "department"
--

CREATE TABLE "department"
(
  "num_dep" char(2) NOT NULL,
  "num_employee" char(3) DEFAULT NULL,
  "name_dep" varchar(20) NOT NULL
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы "department"
--

INSERT INTO "department"
  ("num_dep", "num_employee", "name_dep")
VALUES
  ('1', '100', 'Development '),
  ('2', '200', 'Sales'),
  ('3', '300', 'Design'),
  ('4', '400', 'Support'),
  ('5', '500', 'Analysis');

-- --------------------------------------------------------

--
-- Структура таблицы "employee"
--

CREATE TABLE "employee"
(
  "num_employee" int(3) NOT NULL,
  "num_dep" char(2) NOT NULL,
  "num_cab" char(4) DEFAULT NULL,
  "full_name" varchar(40) NOT NULL
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы "employee"
--

INSERT INTO "employee"
  ("num_employee", "num_dep", "num_cab", "full_name")
VALUES
  ('1', '1', '100', 'Khusainov Aidar Faatovich'),
  ('2', '1', '100', 'Vasilev Vasya Vasilevich'),
  ('3', '2', '200', 'Ivanov Ivan Ivanovich'),
  ('4', '2', '200', 'Burkov Burya Burkovich'),
  ('5', '3', '300', 'Petrov Ivan Petorvich'),
  ('6', '3', '300', 'Petrov Alex Ivanovich'),
  ('7', '4', '400', 'Ivanov Petr Ivanovich'),
  ('8', '4', '400', 'Petrov Oleg Olegovich'),
  ('9', '5', '500', 'Dmitriev Dima Dmitrievich'),
  ('10', '5', '500', 'Aleshin Alex Maratovich');

-- --------------------------------------------------------

--
-- Структура таблицы "phone"
--

CREATE TABLE "phone"
(
  "num_phone" char(15) NOT NULL,
  "num_cab" char(4) NOT NULL
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы "phone"
--

INSERT INTO "phone"
  ("num_phone", "num_cab")
VALUES
  ('22222', '100'),
  ('22240', '200'),
  ('22223', '300'),
  ('22456', '400'),
  ('22234', '500');

-- --------------------------------------------------------

--
-- Структура таблицы "project"
--

CREATE TABLE "project"
(
  "num_project" char(2) NOT NULL,
  "num_dep" char(2) NOT NULL,
  "name_project" varchar(30) NOT NULL,
  "start_date" date NOT NULL,
  "end_date" date NOT NULL,
  "budget" int(7) NOT NULL
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы "project"
--

INSERT INTO "project"
  ("num_project", "num_dep", "name_project", "start_date", "end_date", "budget")
VALUES
  ('1', '1', 'Angry birds', '2019-01-10', '2020-01-10', 500000),
  ('3', '2', 'Lucky', '2019-01-10', '2019-05-01', 1000000),
  ('2', '3', 'Evil people', '2019-01-10', '2019-05-01', 400000),
  ('4', '5', 'Work at home', '2019-01-10', '2019-05-16', 100000),
  ('5', '5', 'Smart House', '2019-01-10', '2020-05-01', 2000000),
  ('6', '4', 'Mobile App', '2019-01-10', '2021-05-01', 3000000);

-- --------------------------------------------------------

--
-- Структура таблицы "task"
--

CREATE TABLE "task"
(
  "num_task" int(3) NOT NULL,
  "num_project" char(2) NOT NULL,
  "num_employee" char(3) NOT NULL,
  "share" int(7) NOT NULL,
  "start_date_task" date NOT NULL,
  "end_date_task" date NOT NULL
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы "task"
--

INSERT INTO "task"
  ("num_task", "num_project", "num_employee", "share", "start_date_task", "end_date_task")
VALUES
  (1, '4', '9', 10000, '2019-01-10', '2019-02-01'),
  (2, '4', '10', 50000, '2019-01-10', '2019-05-01'),
  (3, '1', '1', 200000, '2019-01-10', '2019-05-01'),
  (4, '1', '2', 10000, '2019-05-10', '2019-07-01'),
  (5, '5', '9', 500000, '2019-01-10', '2019-03-01'),
  (6, '5', '9', 50000, '2019-03-01', '2019-04-01'),
  (7, '4', '10', 10000, '2019-01-10', '2019-05-16'),
  (8, '3', '3', 500000, '2019-01-10', '2019-03-01'),
  (9, '3', '4', 500000, '2019-03-01', '2019-05-01'),
  (10, '4', '10', 20000, '2019-01-10', '2019-03-01'),
  (11, '2', '5', 100000, '2019-01-10', '2019-02-01'),
  (12, '2', '6', 50000, '2019-02-01', '2019-04-01');

-- --------------------------------------------------------

--
-- Дублирующая структура для представления "view_employee"
-- (См. Ниже фактическое представление)
--
CREATE TABLE "view_employee"
(
  "full_name" varchar(40)
,
  "name_dep" varchar(20)
,
  "num_cab" char(4)
,
  "num_phone" char(15)
);

-- --------------------------------------------------------

--
-- Структура для представления "view_employee"
--
DROP TABLE IF EXISTS "view_employee";

CREATE ALGORITHM=UNDEFINED DEFINER="student"@"localhost" SQL SECURITY DEFINER VIEW "view_employee"  AS
select "employee"."full_name" AS "full_name", "department"."name_dep" AS "name_dep", "cabinet"."num_cab" AS "num_cab", "phone"."num_phone" AS "num_phone"
from ((("department" join "employee" on(("department"."num_dep" = "employee"."num_dep"))) join "cabinet" on(("employee"."num_cab" = "cabinet"."num_cab"))) join "phone" on(("cabinet"."num_cab" = "phone"."num_cab")))
;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы "cabinet"
--
ALTER TABLE "cabinet"
  ADD PRIMARY KEY ("num_cab");

--
-- Индексы таблицы "department"
--
ALTER TABLE "department"
  ADD PRIMARY KEY ("num_dep")
,
ADD KEY "num_employee"
("num_employee");

--
-- Индексы таблицы "employee"
--
ALTER TABLE "employee"
  ADD PRIMARY KEY ("num_employee")
,
ADD KEY "num_dep"
("num_dep"),
ADD KEY "num_cab"
("num_cab");

--
-- Индексы таблицы "phone"
--
ALTER TABLE "phone"
  ADD PRIMARY KEY ("num_phone")
,
ADD KEY "num_cabinet"
("num_cab");

--
-- Индексы таблицы "project"
--
ALTER TABLE "project"
  ADD PRIMARY KEY ("num_project")
,
ADD KEY "num_dep"
("num_dep");

--
-- Индексы таблицы "task"
--
ALTER TABLE "task"
  ADD PRIMARY KEY ("num_task")
,
ADD KEY "num_project"
("num_project"),
ADD KEY "num_employee"
("num_employee");

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы "task"
--
ALTER TABLE "task"
  MODIFY "num_task" int
(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

ALTER TABLE "employee"
  MODIFY "num_employee" int
(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
